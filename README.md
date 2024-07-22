# React Modal Component by Selsabil MILADI

## Introduction

Ce composant `Modal` est un composant React simple et réutilisable qui permet d'afficher une fenêtre modale personnalisée dans votre application.

## Installation

Pour installer ce composant, utilisez la commande suivante :

`npm install modal-component`

puis importez le composant Modal dans votre composant parent comme dans l'exemple ci-dessous :

```
import React from 'react';
import { Modal } from 'modal-component-selsabil'; 

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>This is the modal content!</p>
      </Modal>
    </div>
  );
}

export default App;


```

## Props

Le composant `Modal` accepte les props suivantes :

- `isOpen` (booléen) : Détermine si la fenêtre modale doit être affichée ou non.
- `onClose` (fonction) : Fonction à exécuter lorsque l'utilisateur ferme la fenêtre modale.
- `children` (ReactNode) : Le contenu à afficher dans la fenêtre modale.

## Conclusion

Le composant personnalisable `Modal` est un excellent moyen de rendre votre code plus propre et plus organisé. N'hésitez pas à l'essayer dans votre prochain projet React !

#React #Modal #NPM
