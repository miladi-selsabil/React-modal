# React Modal Component by Selsabil MILADI

## Introduction

Ce composant `Modal` est un composant React simple et réutilisable qui permet d'afficher une fenêtre modale personnalisée dans votre application.

## Installation

Pour installer ce composant, utilisez la commande suivante :

`npm install modal-component`

puis importez le composant Modal dans votre composant parent comme dans l'exemple ci-dessous :

```
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

```

## Props

Le composant `Modal` accepte les props suivantes :

- `isOpen` (booléen) : Détermine si la fenêtre modale doit être affichée ou non.
- `onClose` (fonction) : Fonction à exécuter lorsque l'utilisateur ferme la fenêtre modale.
- `children` (ReactNode) : Le contenu à afficher dans la fenêtre modale.

## Conclusion

Le composant personnalisable `Modal` est un excellent moyen de rendre votre code plus propre et plus organisé. N'hésitez pas à l'essayer dans votre prochain projet React !

#React #Modal #NPM
