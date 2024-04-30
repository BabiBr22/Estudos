# 1. Contador de Galinhas
# - Quantos ovos terão ao final de uma semana se você tem 20 galinhas e cada uma pode
# botar 2 ovos por dia, considerando que as galinhas não botam aos domingos?


ovos_por_dia = 2
galinhas = 20
dias_semana = 6  
ovos_por_semana = ((ovos_por_dia * galinhas) * dias_semana)
print(f'Ao final da semana você terá {ovos_por_semana} ovos.')