// Fonction pour ajouter une valeur à l'affichage
function appendValue(value) {
    const display = document.getElementById('affichage');
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    const display = document.getElementById('affichage');
    display.value = '';
}

// Fonction pour calculer le résultat
function calculate() {
    const display = document.getElementById('affichage');
    try {
        // Remplacer 'x' par '*' pour la multiplication
        const expression = display.value.replace(/x/g, '*');
        
        // Calculer le résultat en utilisant une fonction personnalisée
        const result = evaluateExpression(expression);
        
        // Afficher le résultat
        display.value = result;
    } catch (error) {
        // En cas d'erreur, afficher "Error"
        display.value = "Error";
    }
}
function evaluateExpression(expression) {
    // Vérifier si l'expression est vide ou ne contient que des espaces
    if (expression === "" || expression.trim().length === 0) {
        return "Empty Expression"; // Retourner un message si l'expression est vide
    }

    // Vérifier si l'expression contient des caractères non autorisés
    const allowedChars = "0123456789+-*/. ";
    for (let char of expression) {
        if (!allowedChars.includes(char)) {
            return "Invalid Expression"; // Retourner un message si un caractère non autorisé est trouvé
        }
    }

    // Utiliser Function pour évaluer l'expression de manière sécurisée
    return new Function('return ' + expression)();
}