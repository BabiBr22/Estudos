#5. Simulador de Luta de Monstros

vida_goblin = 50
vida_esqueleto = 45
while vida_goblin > 0 and vida_esqueleto > 0:
    dano_goblin = random.randint(0, 5)
    dano_esqueleto = random.randint(0, 5)
    vida_goblin -= dano_esqueleto
    vida_esqueleto -= dano_goblin
print("5. O Goblin ficou com", vida_goblin, "pontos de vida e o Esqueleto ficou com", vida_esqueleto, "pontos de vida.")