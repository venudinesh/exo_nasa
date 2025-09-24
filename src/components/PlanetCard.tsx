﻿import React from 'react';
import { Planet, earthLikeScore, weirdnessScore } from '../lib/filters';

interface PlanetCardProps {
  planet: Planet;
  onClick: () => void;
  filterType?: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, onClick, filterType }) => {
  const formatValue = (value: number | null | undefined, unit: string = '', precision: number = 1): string => {
    if (value == null) return 'Unknown';
    return value.toFixed(precision) + unit;
  };

  const getScoreDisplay = () => {
    if (filterType === 'earthlike') {
      const score = earthLikeScore(planet);
      return score > 0 ? (
        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Earth-like: {score}/100
        </div>
      ) : null;
    }
    if (filterType === 'weird') {
      const score = weirdnessScore(planet);
      return score > 0 ? (
        <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
          Weirdness: {score}/100
        </div>
      ) : null;
    }
    return null;
  };

  const getTemperatureColor = (temp: number | null | undefined) => {
    if (!temp) return 'text-gray-600';
    if (temp > 1000) return 'text-red-600';
    if (temp > 500) return 'text-orange-600';
    if (temp > 200) return 'text-yellow-600';
    return 'text-blue-600';
  };

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={`planet-card glow-blue-strong bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer p-4 border border-gray-200 focus:outline-none hover:scale-105 hover:-translate-y-2 hover:border-gray-300`}
    >
      {/* Preview button removed per request */}
      <div className="planet-media mb-3 overflow-hidden rounded-md">
        <img
          src={planet.image || `https://via.placeholder.com/300x150?text=${encodeURIComponent(planet.pl_name)}`}
          alt={`${planet.pl_name} planet`}
          className="planet-image w-full h-24 object-cover rounded-md transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-gray-900 truncate flex-1 mr-2">
          {planet.pl_name}
        </h3>
        {getScoreDisplay()}
      </div>
      {/* Add space between heading and summary */}
      <div className="my-4"></div>
      <div className="text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="font-medium">Host:</span>
          <span>{planet.hostname || 'Unknown'}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium">Discovered:</span>
          <span>{planet.discoveryyear || 'Unknown'}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-medium text-gray-700">Distance</div>
          <div className="text-gray-900">{formatValue(planet.sy_dist, ' pc')}</div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-medium text-gray-700">Radius</div>
          <div className="text-gray-900">{formatValue(planet.pl_rade, ' R')}</div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-medium text-gray-700">Temperature</div>
          <div className={getTemperatureColor(planet.pl_eqt)}>
            {formatValue(planet.pl_eqt, ' K', 0)}
          </div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-medium text-gray-700">Insolation</div>
          <div className="text-gray-900">{formatValue(planet.pl_insol, ' Earth')}</div>
        </div>
      </div>
      {/* Kepler-specific 3D view button */}
      {(planet.pl_name === 'Kepler-186f' || planet.pl_name === 'Kepler-186 f') && (
        <div className="mt-3">
          <a
            href="https://exoplanets.nasa.gov/alien-worlds/exoplanet-travel-bureau/explore-kepler-186f/?travel_bureau=true"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* KELT-9 b specific 3D view button */}
      {planet.pl_name === 'KELT-9 b' && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/kelt-9-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}

      {/* Proxima-specific 3D view button (SVS media) */}
      {planet.pl_name === 'Proxima Centauri b' && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/proxima-centauri-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* TRAPPIST-1e specific 3D view button */}
      {planet.pl_name === 'TRAPPIST-1e' && (
        <div className="mt-3">
          <a
            href="https://exoplanets.nasa.gov/alien-worlds/exoplanet-travel-bureau/trappist-1e-guided-tour/?intent=021"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* TOI-715 specific 3D view button */}
      {planet.pl_name === 'TOI-715 b' && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/toi-715-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* HD 40307g specific 3D view button */}
      {planet.pl_name === 'HD 40307g' && (
        <div className="mt-3">
          <a
            href="https://exoplanets.nasa.gov/alien-worlds/exoplanet-travel-bureau/hd-40307g-guided-tour/?intent=021"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* 55 Cancri e specific 3D view button */}
      {planet.pl_name === '55 Cancri e' && (
        <div className="mt-3">
          <a
            href="https://exoplanets.nasa.gov/alien-worlds/exoplanet-travel-bureau/explore-55-cancri-e/?travel_bureau=true&intent=021"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* WASP-12b specific 3D view button */}
      {(planet.pl_name === 'WASP-12b' || planet.pl_name === 'WASP-12 b') && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/wasp-12-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* K2-18 b specific 3D view button */}
      {(planet.pl_name === 'K2-18b' || planet.pl_name === 'K2-18 b') && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/k2-18-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}

      {/* PSR B1620-26 b specific 3D view button */}
      {planet.pl_name === 'PSR B1620-26 b' && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/psr-b1620-26-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* Gliese 667Cc specific 3D view button */}
      {planet.pl_name === 'Gliese 667Cc' && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/gj-667-c-c/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}

      {/* GJ 1002b NASA catalog link */}
      {(planet.pl_name === 'GJ 1002b' || planet.pl_name === 'GJ 1002 b' || planet.pl_name === 'GJ-1002b') && (
        <div className="mt-3">
          <a
            href="https://science.nasa.gov/exoplanet-catalog/gj-1002-b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="view3d-btn inline-flex items-center gap-2 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            View in 3D
          </a>
        </div>
      )}
      {/* Expanded details revealed on hover */}
      <div className="expanded-details mt-3 pt-3 border-t border-gray-100 max-h-0 overflow-hidden transition-all duration-300">
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div>
            <div className="font-medium">Method</div>
            <div className="text-xs text-gray-500">{planet.discoverymethod || 'Unknown'}</div>
          </div>
          <div>
            <div className="font-medium">Orbital period</div>
            <div className="text-xs text-gray-500">{planet.pl_orbper ? `${planet.pl_orbper} days` : '—'}</div>
          </div>
          <div>
            <div className="font-medium">Mass</div>
            <div className="text-xs text-gray-500">{planet.pl_bmasse ? `${planet.pl_bmasse} M⊕` : '—'}</div>
          </div>
          <div>
            <div className="font-medium">Star</div>
            <div className="text-xs text-gray-500">{planet.st_spectype || '—'} • {planet.st_teff ? `${planet.st_teff} K` : '—'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
