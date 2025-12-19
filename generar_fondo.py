import os
import json

# Ruta de la carpeta assets
assets_path = "./assets"

# Carpetas a escanear
folders = ["pc", "celular"]

# Diccionario donde se guardarán los nombres
backgrounds = {}

for folder in folders:
    folder_path = os.path.join(assets_path, folder)
    if os.path.exists(folder_path):
        # Listar solo archivos de imagen comunes
        files = [f for f in os.listdir(folder_path) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))]
        backgrounds[folder] = files
    else:
        print(f"¡Cuidado! La carpeta {folder_path} no existe")
        backgrounds[folder] = []

# Guardar en JSON
with open(os.path.join(assets_path, "backgrounds.json"), "w", encoding="utf-8") as f:
    json.dump(backgrounds, f, ensure_ascii=False, indent=2)

print("Archivo backgrounds.json generado correctamente!")
