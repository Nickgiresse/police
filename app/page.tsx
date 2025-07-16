'use client'

import React, { useState } from 'react';

export default function TextEditor() {
  const [text, setText] = useState('WBS Solidarity Foundation');
  const [alignment, setAlignment] = useState('center');
  const [fontWeight, setFontWeight] = useState('normal');
  const [isItalic, setIsItalic] = useState(false);
  const [fontSize, setFontSize] = useState(50);
  const [letterSpacing, setLetterSpacing] = useState(0);

  const initialState = {
    text: 'WBS Solidarity Foundation',
    alignment: 'center',
    fontWeight: 'normal',
    isItalic: false,
    fontSize: 50,
    letterSpacing: 0
  };

  const resetToInitial = () => {
    setText(initialState.text);
    setAlignment(initialState.alignment);
    setFontWeight(initialState.fontWeight);
    setIsItalic(initialState.isItalic);
    setFontSize(initialState.fontSize);
    setLetterSpacing(initialState.letterSpacing);
  };

  const textStyle = {
    textAlign: alignment,
    fontWeight: fontWeight,
    fontStyle: isItalic ? 'italic' : 'normal',
    fontSize: `${fontSize}px`,
    letterSpacing: `${letterSpacing}px`,
    lineHeight: '1.6',
    padding: '20px',
    minHeight: '200px',
   
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.2s ease',
    resize: 'vertical',
    backgroundColor: '#000000',
    color: 'white'
  };

  // Composants d'icônes simples
  const AlignLeftIcon = () => (
    <div className="w-5 h-5 flex flex-col justify-center">
      <div className="h-1 bg-current w-4 mb-1"></div>
      <div className="h-1 bg-current w-3 mb-1"></div>
      <div className="h-1 bg-current w-4"></div>
    </div>
  );

  const AlignCenterIcon = () => (
    <div className="w-5 h-5 flex flex-col justify-center items-center">
      <div className="h-1 bg-current w-4 mb-1"></div>
      <div className="h-1 bg-current w-3 mb-1"></div>
      <div className="h-1 bg-current w-4"></div>
    </div>
  );

  const AlignRightIcon = () => (
    <div className="w-5 h-5 flex flex-col justify-center items-end">
      <div className="h-1 bg-current w-4 mb-1"></div>
      <div className="h-1 bg-current w-3 mb-1"></div>
      <div className="h-1 bg-current w-4"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="">
         
          
          {/* Barre d'outils */}
          <div className="  p-4 mb-6">
            <div className="flex flex-wrap gap-4 items-center justify-center">


               {/* Épaisseur de police */}
              
               
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="border border-gray-500 bg-black text-white rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="100">Thin</option>
                  <option value="200">Ultra Light</option>
                  <option value="300">Lignt</option>
                  <option value="normal">Regular</option>
                  <option value="500">Medium</option>
                  <option value="600">Semi Bold</option>
                  <option value="bold">Bold</option>
                  <option value="800">Black</option>
                  <option value="900">Ultra Black</option>
                </select>
             
              {/* Style italique */}
              <div className="flex border border-gray-600 rounded-[5px] shadow-sm">
                <button
                  onClick={() => setIsItalic(!isItalic)}
                  className={`p-1 rounded-[5px] transition-all ${
                    isItalic 
                      ? 'bg-[#6161613d] text-white shadow-md' 
                      : 'hover:bg-[#6161613d] text-gray-300'
                  }`}
                  title="Italique"
                >
                  <span className="text-lg italic">I</span>
                </button>
              </div>

              {/* Alignement */}
              <div className="flex rounded-lg shadow-sm border border-gray-600">
                <button
                  onClick={() => setAlignment('left')}
                  className={`p-2 rounded-l-lg transition-all ${
                    alignment === 'left' 
                      ? 'bg-[#6161613d] text-white shadow-md' 
                      : 'hover:bg-[#6161613d]  text-gray-300'
                  }`}
                  title="Aligner à gauche"
                >
                  <AlignLeftIcon />
                </button>
                <button
                  onClick={() => setAlignment('center')}
                  className={`p-2 transition-all ${
                    alignment === 'center' 
                      ? 'bg-[#6161613d]  text-white shadow-md' 
                      : 'hover:bg-[#6161613d]  text-gray-300'
                  }`}
                  title="Centrer"
                >
                  <AlignCenterIcon />
                </button>
                <button
                  onClick={() => setAlignment('right')}
                  className={`p-2 rounded-r-lg transition-all ${
                    alignment === 'right' 
                      ? 'bg-[#6161613d]  text-white shadow-md' 
                      : 'hover:bg-[#6161613d]  text-gray-300'
                  }`}
                  title="Aligner à droite"
                >
                  <AlignRightIcon />
                </button>
              </div>

             

              

              {/* Taille de police */}
              <div className="flex flex-col  px-3 py-2">
                <div className='flex flex-row w-full justify-between'>
                  <span className="text-sm text-gray-300 ">Size:</span>
                  <span className="text-sm font-medium text-white min-w-[3rem]">
                    {fontSize}px
                  </span>
                </div>  
                <input
                  type="range"
                  min="12"
                  max="100"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-25 mx-1 "
                />
                
              </div>

              {/* Espacement */}
              <div className="flex flex-col items-center px-3 py-2">
                <div className='flex flex-row w-full justify-between'>  
                  <span className="text-sm text-gray-300 ">Spacing:</span>
                  <span className="text-sm font-medium text-white min-w-[3rem]">
                    {letterSpacing}px
                  </span>
                </div>  
                <input
                  type="range"
                  min="-2"
                  max="8"
                  step="0.5"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="w-25 mx-2"
                />
                
              </div>

              {/* Bouton Reset */}
              <button
                onClick={resetToInitial}
                className="flex items-center gap-2 border border-gray-600 text-white px-1 py-1 rounded-lg hover:bg-[#6161610e] transition-all shadow-sm"
                title="Remettre à l'état initial"
              >
                <span className="text-lg">↻</span>
                
              </button>
            </div>
          </div>

          {/* Zone de texte */}
          <div className="mb-4  ">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={textStyle}
              className="w-full  h-[70vh] text-red-500"
              placeholder="Tapez votre texte ici..."
            />
          </div>

          {/* Aperçu des paramètres */}
          {/* <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Paramètres actuels:</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>Alignement: <strong className="text-white">{alignment}</strong></span>
              <span>Épaisseur: <strong className="text-white">{fontWeight}</strong></span>
              <span>Italique: <strong className="text-white">{isItalic ? 'Oui' : 'Non'}</strong></span>
              <span>Taille: <strong className="text-white">{fontSize}px</strong></span>
              <span>Espacement: <strong className="text-white">{letterSpacing}px</strong></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
