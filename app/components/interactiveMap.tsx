"use client";
import { useState, useEffect, useRef } from 'react';

interface Country {
    id: string;
    d: string;
    name: string;
}

interface HoveredCountry {
    name: string | null;
    x: number;
    y: number;
}

const InteractiveMap = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry>({name: null, x: 0, y: 0});
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch('/countriesWNames.json')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleCountryClick = (id: string) => {
    setActiveIds(prev => {
        const newIds = new Set(prev);
        if (newIds.has(id)) {
          newIds.delete(id);
        } else {
          newIds.add(id);
        }
        return newIds;
      });
  };

  const onHover = (event: React.MouseEvent<SVGPathElement, MouseEvent>, name: string) => {
    if (svgRef.current) { 
      const svgRect = svgRef.current.getBoundingClientRect();
      setHoveredCountry({ 
        name, 
        x: event.clientX - svgRect.left, 
        y: event.clientY - svgRect.top
      });
    }
  };

  const onLeave = () => {
    setHoveredCountry({ name: null, x: 0, y: 0 });
  };

  return (
    <div className="relative">
      <svg ref={svgRef} viewBox="0 -50 2000 1000">
        {countries.map(country => (
          <path
          key={country.id}
          d={country.d}
          className={`${activeIds.has(country.id) ? 'fill-blue-500' : 'fill-current'} cursor-pointer`}
          onMouseEnter={(event) => onHover(event, country.name)}
          onMouseLeave={onLeave}
          onClick={() => handleCountryClick(country.id)}
        />
        ))}
      </svg>
      {hoveredCountry.name && (
        <div className={`absolute bg-white border border-black rounded p-1
          transform -translate-x-1/2 -translate-y-full`}
          style={{ left: hoveredCountry.x, top: hoveredCountry.y }}>
          {hoveredCountry.name}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;


// -> values taken from this map and made into a json file:
// *************Map created by Simplemaps.com********************		
// *************Attribution is highly appreciated!***************
// *************http://simplemaps.com****************************
// The MIT License (MIT)

// Copyright (c) 2020 Pareto Softare, LLC DBA Simplemaps.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.