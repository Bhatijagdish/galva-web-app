import logging
import re

from pylatexenc.latex2text import LatexNodes2Text
from latex2mathml import converter
from pylatex import Document, Section, Math, Command


def convert_latex_to_html(response):
    latex_converter = LatexNodes2Text()
    processed_response = latex_converter.latex_to_text(response)
    return processed_response


def convert_latex_to__html(response):
    processed_response = converter.convert(response)
    return processed_response


def chemical_equation_latex(reaction):
    """
  Returns a LaTeX formatted chemical equation.

  Args:
    reaction: A string representing the chemical reaction.

  Returns:
    A LaTeX string representing the chemical equation.
  """

    latex_equation = f"\ce{{{reaction}}}"
    return latex_equation


def create_latex_document(response):
    match = re.search(r"\[(.*?)\]", response)
    if not match:
        return "No equation found"

    latex_equation = match.group(1)

    # text_match = re.search(r"\\text{.*?}")
    # formatted_equation = latex_equation.replace("\\text{", "").replace("}", "").replace("+", "⁺").replace("-", "⁻")


if __name__ == '__main__':
    query = """
*At the Cathode (Gold Object):*
\[ \text{Ag}^+ (aq) + e^- \rightarrow \text{Ag} (s) \]

*At the Anode (Silver Rod):*
\[ \text{Ag} (s) \rightarrow \text{Ag}^+ (aq) + e^- \]
    """
    # print(convert_latex_to_html(query))

    print("==========================================")

    # query = "Some (df) Text \[ \text{Ag}^+ (aq) + e^- \rightarrow \text{Ag} (s) \] testing"
    # Example usage
    # input_text = "Some Text \\[ \\text{Ag}^+ (aq) + e^- \\rightarrow \\text{Ag} (s) \\] testing"
    #
    # pattern = r"\\\[([^\]]+)\\\]"
    # matches = re.findall(pattern, input_text)


    start_idx = 0
    end_idx = 0
    isEquation = False

    for i in range(len(query.split("\n"))):
        if query[i] == "\\" and query[i + 1] == "[":
            isEquation = True
            start_idx = i + 2
        if query[i] == "\\" and query[i + 1] == "]":
            isEquation = False
            end_idx = i

    # input_txt = query[start_idx:end_idx]

    input_txt = "\[ \text{Cu}^{2+} (aq) + 2e^- \rightarrow \text{Cu} (s) \]"

    bold_pattern = r"\text{(.*?)}"
    input_txt = re.sub(bold_pattern, r"<b>\1</b>", input_txt)

    # Applying superscript formatting
    superscript_pattern = r"\^(\S+)"
    input_txt = re.sub(superscript_pattern, r"<sup>\1</sup>", input_txt)

    superscript_pattern_t = r"\^{(.*?)}"
    input_txt = re.sub(superscript_pattern_t, r"<sup>\1</sup>", input_txt)

    # Applying italic formatting for content inside parentheses ()
    italic_pattern = r" \((.*?)\)"
    input_txt = re.sub(italic_pattern, r"(<i>\1</i>)", input_txt)

    # Replace LaTeX arrow with HTML arrow
    arrow_pattern = r"\rightarrow"
    input_txt = re.sub(arrow_pattern, "→", input_txt)

    # Reconstruct the final string
    # final_output = query[:start_idx - 2] + "[" + input_txt + "]" + query[end_idx + 2:]

    # final_output = final_output.replace("\n\[", "").replace("]", "")

    print(input_txt)

    # bold_pattern = r"\text{(.*?)}"
    # matches = re.findall(bold_pattern, input_txt)
    #
    # for item in matches:
    #     print(f"<b>{item}</b>")
    #
    # superscript_pattern = r"\^(\S+)"
    # matches = re.findall(superscript_pattern, input_txt)
    #
    # for item in matches:
    #     print(f"<sup>{item}</sup>")
    #
    # italic_pattern = r"\((.*?)\)"
    # matches = re.findall(italic_pattern, input_txt)
    #
    # for item in matches:
    #     print(f"(<i>{item}</i>)")
    #
    # arrow_pattern = r"\rightarrow"
    # matches = re.findall(arrow_pattern, input_txt)
    #
    # for item in matches:
    #     print("→")
    # for match in matches:
    #     # Handle \text{...}
    #     print(match)
    #     if r"\\text{" in match and match.endswith("}"):
    #         formatted_text = re.sub(r"\\text\{([^}]*)\}", r"<b>\1</b>", match)
    #     else:
    #         formatted_text = match
    #
    #     # Handle ^ for superscripts
    #     formatted_text = re.sub(r"\^(\w+)", r"<sup>\1</sup>", formatted_text)
    #
    #     # Handle \rightarrow for arrows
    #     formatted_text = formatted_text.replace(r"\rightarrow", "→")
    #
    #     # Replace the original matched text in the input text
    #     query_2 = query_2.replace(match, formatted_text)
    #
    # print(query_2)
