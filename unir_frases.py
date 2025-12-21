import json
from pathlib import Path

base_path = Path("./quotes")
all_quotes = []

# Recorre todos los json dentro de quotes/
for json_file in base_path.glob("*.json"):
    # Ignorar el archivo de salida
    if json_file.name == "todas.json":
        continue

    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
        all_quotes.extend(data)

# Guardar el merge
with open(base_path / "todas.json", "w", encoding="utf-8") as f:
    json.dump(all_quotes, f, ensure_ascii=False, indent=2)

print("todas.json generado correctamente")

#=====================
# Actualizar README.md
#=====================

def actualizar_readme():
    readme_path = Path("README.md")
    base_url = "https://vitoia4.github.io/galletita_de_la_fortuna/"

    # Obtener nombres de JSON (sin .json)
    frases = [
        f.stem for f in base_path.glob("*.json")
        if f.name != "todas.json"
    ]

    # Construir índice
    indice = ["## Modos de frases\n"]
    for nombre in sorted(frases):
        indice.append(f"- [{nombre.capitalize()}]({base_url}?frases={nombre})\n")

    indice.append(f"- [Todas]({base_url}?frases=todas)\n")

    contenido_indice = "".join(indice)

    # Leer README existente
    if readme_path.exists():
        contenido = readme_path.read_text(encoding="utf-8")
    else:
        contenido = ""

    # Reemplazar o agregar sección
    inicio = "<!-- FRASES_START -->"
    fin = "<!-- FRASES_END -->"

    bloque = f"{inicio}\n{contenido_indice}\n{fin}"

    if inicio in contenido and fin in contenido:
        contenido = (
            contenido.split(inicio)[0]
            + bloque
            + contenido.split(fin)[1]
        )
    else:
        contenido += "\n\n" + bloque

    readme_path.write_text(contenido, encoding="utf-8")
    print("README.md actualizado")

actualizar_readme()
