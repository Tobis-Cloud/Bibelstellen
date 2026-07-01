# Bibelstellen Quiz

Eine statische Web-App zum Lernen und Raten von Bibelstellen in der **Schlachter 2000** Übersetzung.  
Vollständig offline nutzbar – kein Backend, keine Abhängigkeiten.

![Bibelstellen Icon](Bibelstellen.png)

## Features

- 📖 **100 Bibelstellen** – 70% Neues Testament, 30% Altes Testament
- 🎮 **Spielmodus** – Vers lesen, Buch aus Raster wählen, dann Kapitel als Zahlenbuttons
- 🏆 **Scoring** – 50 Punkte für Buch + 50 Punkte für Kapitel + Streak-Counter
- ☰ **Hamburger-Menü** – Filter nach NT / AT / Evangelien / Briefe / Propheten / Poesie
- 👆 **Swipe-Geste** – Von rechtem Rand nach links öffnet Einstellungen
- 💾 **Fortschritt** – Highscore lokal im Browser gespeichert (localStorage)
- 📱 **PWA / Apple** – Zum iOS-Startbildschirm hinzufügbar, läuft offline

## Design

- Dark Mode mit tiefem Dunkelblau und Gold-Akzenten
- Subtiles Oktagon-Muster im Hintergrund
- Smooth Animationen (Shake bei Fehler, Glow bei Richtig)
- Google Fonts: Playfair Display + Inter

## Nutzung

Einfach `index.html` lokal im Browser öffnen oder über einen statischen Hoster (z.B. GitHub Pages) bereitstellen.

```bash
# Lokaler Test
python3 -m http.server 8000
# → http://localhost:8000
```

## Dateien

| Datei | Beschreibung |
|---|---|
| `index.html` | Haupt-App |
| `style.css` | Design-System |
| `app.js` | Spiellogik |
| `verses.js` | 100 Bibelstellen (Schlachter 2000) |
| `manifest.json` | PWA Manifest |
| `sw.js` | Service Worker (Offline) |
| `Bibelstellen.png` | App-Icon |

## Übersetzung

Alle Bibelverse sind aus der **Schlachter 2000** Übersetzung.
