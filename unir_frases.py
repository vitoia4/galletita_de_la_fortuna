import json
from pathlib import Path

base_path = Path("./quotes")

files_to_merge = ["brainrot.json", "generales.json"]
all_quotes = []

for filename in files_to_merge:
    with open(base_path / filename, "r", encoding="utf-8") as f:
        data = json.load(f)
        all_quotes.extend(data)

with open(base_path / "todas.json", "w", encoding="utf-8") as f:
    json.dump(all_quotes, f, ensure_ascii=False, indent=2)

print("todas.json generado correctamente")
