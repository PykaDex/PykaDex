import sys
import random

def pokemonIndex(min, max):
    return random.randint(min, max)

print(pokemonIndex(1, 151))    
pokemonIndex(1, 151)
sys.stdout.flush()