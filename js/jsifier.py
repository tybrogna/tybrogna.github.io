
games = []
js_games = []
with open('./gameList2025.js', encoding="utf8") as file:
    games = file.readlines()
    # games.append(file.readline())

for a in range(len(games)):
    to_add = games[a]
    to_add = to_add.strip()
    to_add = to_add.replace("'", "\\'")
    to_add = to_add.replace('™', '')
    js_str = f"{{'id': {str(a)}, 'text': '{to_add}', 'notable': false}},"
    js_games.append(js_str)


with open('gamified.js', encoding="utf8", mode='w') as file:
    file.write("let games = [\n")
    for game in js_games:
        file.write(f"{game}\n")
    file.write(']')