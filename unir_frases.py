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
