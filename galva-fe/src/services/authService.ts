// src/services/authService.ts

const API_URL = 'http://galva.ai/api/users'; // Replace with your actual API base URL

interface SignUpData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  role?: string;
  user_id?: number; // Changed to number
}

export const signUp = async (userData: SignUpData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userData,
        role: "user",
        is_verified: true
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Signup failed');
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userData: SignInData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: userData.email,
        password: userData.password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Sign-in failed');
    }

    const data: ApiResponse = await response.json();
    // Optionally, store tokens in localStorage or sessionStorage
    if (data.access_token && data.refresh_token) {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
