FROM tiangolo/uvicorn-gunicorn-fastapi:python3.10
USER root

WORKDIR /app

COPY ./requirements.txt /app/
COPY ./app /app

RUN apt update -y && apt upgrade -y
RUN apt install -y python3-pip
RUN #apt install python3-pip
RUN pip --version
RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8003"]