# Evaluation programmation parallèle
- Vous pouvez choisir parmis les technologies vues en cours : 
    - C#
    - JS (typescript, node, ...) ==> Attention, si vous choisissez du js, vous devez réaliser des promises vous même et faire quelque chose de complet qui ne part pas du format proposé par les exercices réalisés en autonomie via le lien github.
- Cette évaluation est normalement trop longue intentionnellement, mais c'est normal
- Vous allez avoir 5 exercices proposés que j'ai essayé de trier par ordre de difficulté / temps (essayé...)
- **VOUS NE DEVEZ EN REALISER QUE 4 SUR 5 !**
- **VOUS NE DEVEZ EN REALISER QUE 4 SUR 5 !**
- **VOUS NE DEVEZ EN REALISER QUE 4 SUR 5 !**
- Certains exercices sont uniquement notés sur le rendu et le choix utilisé pour mettre en place l'asynchronisme, un parmis ceux-ci (l'exercice 4) sera également noté sur le temps permettant de réaliser les opérations demandées.

## Exercice 1 : Graphe simple à implémenter
- Un peu à l'instar de ce qui est demandé dans les exercices typescript, vous devez implémenter un comportement asynchrone permettant de gérer le workflow demandé. 
- Celui-ci est extrêmement simple : ![Voir capture](<graph1.png>)
- La sortie attendue est donc : 
```
A démarre
A termine
B démarre
C démarre
B termine
C termine
D démarre
D termine
```

## Exercice 2 : Mise en place de traitement asynchrones simple
- Créer un programme qui exécute trois tâches en parallèle, pour ensuite faire la somme des nombres de 3 ranges différentes :
    - 1-100 pour la tâche 1
    - 101-200 pour la tâche 2
    - 201-300 pour la tâche 3
- Récupérez le résultats des trois tâches
- Affichez les indépendamment dans le terminal
- Ensuite, faites en sorte de faire la somme des trois ranges et affichez le dans le terminal
- Pensez au meilleur moyen de réaliser ces opérations en asynchrone, ça vaudra des points

## Exercice 3 : Différentes utilisation de Task...
- Créer un programme qui simule un téléchargement depuis un serveur (durée à simuler également)
    - Le premier DL prend 6 secondes,
    - Le second DL prend 3 secondes,
    - Le troisième DL prend 4 secondes.
- En utilisant ce que vous appris, précisez quelle est la tâche qui se termine en premier, au moment même ou elle est terminée
- Dès que les trois tâches sont terminées, affichez un message de log final (uniquement lorsque tout est terminé)

## Exercice 4 : Réalisation d'un graphe plus complexe avec gestion d'erreur
- Comme pour l'exercice 1, vous devez implémenter le graphe proposé.
- Attention, celui-ci nécessite de gérer une durée pour chaque tâche.
- Celui-ci est un peu plus complexe : ![Voir capture](<graph2.png>)
- Explication textuelle du workflow : 
    - A : Démarre en premier, prends 2 secondes
    - B : Dépends de A, démarre dès que A est terminé, prends 3 secondes.
    - C : Dépends de A, démarre dès que A est terminé (en même temps que B), prends 1 secondes.
    - D : Dépends de B et de C, démarre seulement lorsque les deux sont terminés, prends 4 secondes.
    - E : Dépends de D, démarre seulement lorsque D est terminé, prends 3 secondes
    - F : Depends de C, démarre dès que C est terminé et prends 2 secondes.
- **Si vous n'arrivez pas du tout à gérer l'erreur, faites le même workflow sans l'erreur, ça vous donnera des points !**
- Exemple de retour attendu 
```
A démarre  
A termine  
B démarre  
C démarre  
C termine  
B termine  
D démarre  
D a échoué avec l'erreur : [Erreur simulée]  
E ne peut pas démarrer en raison de l'échec de D.  
F démarre  
F termine  
Exécution du workflow terminée avec des erreurs.
```

## Exercice 5 : Mise en place d'un workflow plutôt simple, mais un peu long à implémenter...
En utilisant ce qu'on a vu en programmation parallèle, réalisez le workflow vu sur slides, dont voici quelques informations : 
- Faire un calcul de la somme de tous les nombres entre 1 et 10000 en opération parallèle 
- Afficher le résultat du calcul de la somme des nombres entre 1 et 10000
- (Ce premier calcul doit être effectué en amont, pas en parallèle des deux prochains)
- (N'oubliez pas la propriété "toujours copier" pour les fichiers Eval_file1.txt et Eval_file2.txt)
- Traiter deux fichiers pour compter le nombre de mots (séparateur " ")
- Traiter deux fichiers pour compter d'occurences de "Lorem" (A vous de trouver un moyen rapide de réaliser cette étape)
- Appeler l'API https://api.chucknorris.io/jokes/random et comptez le nombre de mot contenu dans le "value"
- (Ces trois étapes précédentes doivent être faites en parallèle, vous êtes libre de choisir votre façon de faire ici, mais n'oubliez pas ce que j'ai dit durant le cours)
- Afficher le nombre de mots des deux fichiers 
- Afficher le nombre d'occurences de "Lorem" des deux fichiers
- Afficher le nombre de mots de la blague
- Réaliser une opérations finale qui affiche la somme des 6 nombres résultats précédents
- Afficher les informations pour chaque étape, celle du résultat finale attendu et le temps de traitement total dans la Console

PS : 
- Attention à ce que votre résultat soit TOUJOURS cohérent à chaque exécution de votre code. 
- Je dis ça, car en fonction de comment vous allez gérer vos opérations, vous risquez d'avoir des suprises.
- Voici le schéma de ce qui est demandé : ![Voir capture](<workflow_files.png>)
