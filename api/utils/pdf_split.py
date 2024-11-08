def split_text(text: str, max_length: int = 4000) -> list:
    """Divide o texto em partes menores."""
    return [text[i:i + max_length] for i in range(0, len(text), max_length)]