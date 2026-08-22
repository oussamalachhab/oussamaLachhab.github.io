import React from 'react'

/**
 * Élément signature du design "Telemetry / Pit Lane" : une bande à 3 segments
 * colorés (vert / violet / rouge), inspirée des couleurs de chronométrage F1
 * (plus rapide / meilleur temps personnel / secteur standard).
 * Utilisée comme séparateur entre les sections à la place d'un simple <hr>.
 */
function SectorDivider() {
  return (
    <div className="sector-strip" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default SectorDivider
