# LabyrintGenerator
# Recursive Diviion-algoritmen/"Divide and concur": opdeler labyrinten i mindre rum ved hjælp af lodrette el. vandrette vægge. 
# Den adskiller sig fra RDFS ved ikke at udføre en tilfældig dybdesøgning, men i stedet ved at opdele labyrinten systematisk i mindre dele. Recursive Division-algoritmen er ofte mere forudsigelig og resulterer i mere regelmæssige labyrinter end RDFS, som kan producere mere tilfældige og komplekse strukturer



# Randomized depth-first search - essensen er at udforske dybt ind i labyrinten på en tilfældig måde, ved at vælge tilfældige naboer at udforske først, hvilket giver labyrinten en tilfældig og ofte kompleks struktur.

# Solver: 
Algoritme:
Jeg har anvendt en Depth-First Search (DFS) algoritme med backtracking til at finde en vej gennem labyrinten. DFS-algoritmen udforsker labyrinten ved at gå så langt som muligt i en retning, indtil den når en død ende, hvorefter den bakker tilbage og udforsker andre grene. Backtracking-funktionaliteten giver mulighed for at gå tilbage til tidligere besøgte celler for at udforske alternative stier.

### Rekursiv eller stack:
Min implementering bruger en rekursiv tilgang til DFS-algoritmen. Jeg har oprettet en rekursiv hjælpefunktion, `dfs`, der besøger hver celle og udforsker dens naboer, indtil målet nås eller en død ende opstår. Ruten gennem labyrinten gemmes ved hjælp af en stack.

### Beregning af ruten:
Ruten gennem labyrinten beregnes i ét hug. Når DFS-algoritmen har fundet en vej fra start til mål, returneres den fulde rute, som derefter vises på én gang.

### Visning af backtracking:
Jeg har valgt kun at vise den færdige rute gennem labyrinten. Backtracking-trinnet, hvor algoritmen går tilbage til tidligere besøgte celler, vises ikke i visualiseringen af labyrinten. Dette er for at holde visningen ren og fokusere på den endelige løsning.

### Andre relevante oplysninger:
implementation af DFS-algoritmen udforsker cellerne i en fast rækkefølge (øst, syd, vest, nord), hvilket kan påvirke ruten, især hvis flere veje er tilgængelige. Derudover er labyrintens størrelse ikke begrænset til de hardcodede værdier; algoritmen fungerer korrekt for labyrinter af vilkårlig størrelse, så længe start- og målcellerne er angivet korrekt i JSON-filen.

