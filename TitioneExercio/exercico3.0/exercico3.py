# 3. Calculadora de Pizza
# - Determine quantas fatias de pizza cada amigo receberá e quantas sobrarão, supondo que
# cada pizza tem 8 fatias.



numero_amigos = int(input("Quantos vão comer pizza?:"))
total_fatias = 8
fatias_por_amigo = total_fatias / numero_amigos
fatias_sobrando = total_fatias % numero_amigos
print(f'Cada pessoa recebera {round(fatias_por_amigo)} fatias e sobrará {fatias_sobrando}')