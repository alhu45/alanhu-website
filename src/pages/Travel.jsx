import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar1.jsx'
import '../styles/Travel.css'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

const cities = [
  { city: 'Toronto',     country: 'Canada',         lat: 43.65,  lon: -79.38  },
  { city: 'Vancouver',   country: 'Canada',         lat: 49.28,  lon: -123.12 },
  { city: 'Calgary',     country: 'Canada',         lat: 51.05,  lon: -114.07 },
  { city: 'Seattle',     country: 'USA',            lat: 47.61,  lon: -122.33 },
  { city: 'Amsterdam',   country: 'Netherlands',    lat: 52.37,  lon: 4.90    },
  { city: 'Nice',        country: 'France',         lat: 43.71,  lon: 7.26    },
  { city: 'Monaco',      country: 'Monaco',         lat: 43.74,  lon: 7.43    },
  { city: 'Barcelona',   country: 'Spain',          lat: 41.39,  lon: 2.16    },
]

const NA = ['Canada', 'USA', 'Mexico']
const EU = ['UK', 'France', 'Netherlands', 'Spain', 'Italy', 'Czech Republic', 'Monaco']
const AS = ['Japan', 'China', 'Thailand', 'Singapore']

export default function Travel() {
  const svgRef = useRef(null)
  const [tooltip, setTooltip] = useState(null)

  const naCount = cities.filter(c => NA.includes(c.country)).length
  const euCount = cities.filter(c => EU.includes(c.country)).length
  const asCount = cities.filter(c => AS.includes(c.country)).length
  const countryCount = new Set(cities.map(c => c.country)).size

  const continentCount = [
    cities.some(c => NA.includes(c.country)),
    cities.some(c => EU.includes(c.country)),
    cities.some(c => AS.includes(c.country)),
  ].filter(Boolean).length

  useEffect(() => {
    const W = 960, H = 500
    const svg = d3.select(svgRef.current).attr('viewBox', `0 0 ${W} ${H}`)
    const projection = d3.geoNaturalEarth1().scale(153).translate([W / 2, H / 2])
    const path = d3.geoPath().projection(projection)

    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        svg.append('g')
          .selectAll('path')
          .data(topojson.feature(world, world.objects.countries).features)
          .join('path')
          .attr('class', 'travel-country')
          .attr('d', path)

        svg.append('path')
          .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
          .attr('fill', 'none')
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.4)
          .attr('d', path)

        cities.forEach(c => {
          const [x, y] = projection([c.lon, c.lat])
          const g = svg.append('g').style('cursor', 'pointer')
            .on('mouseenter', () => setTooltip(c))
            .on('mouseleave', () => setTooltip(null))

          if (c.city === 'Toronto') {
            const s = 10
            g.append('polygon')
              .attr('points', `${x},${y - s * 0.55} ${x - s * 0.5},${y} ${x + s * 0.5},${y}`)
              .attr('fill', '#e85d26')
            g.append('rect')
              .attr('x', x - s * 0.32).attr('y', y)
              .attr('width', s * 0.64).attr('height', s * 0.45)
              .attr('fill', '#e85d26')
            g.append('rect')
              .attr('x', x - s * 0.12).attr('y', y + s * 0.18)
              .attr('width', s * 0.24).attr('height', s * 0.27)
              .attr('fill', '#fff')
          } else {
            g.append('circle')
              .attr('cx', x).attr('cy', y).attr('r', 7)
              .attr('fill', 'none').attr('stroke', '#e85d26')
              .attr('stroke-width', 0.8).attr('opacity', 0.35)

            g.append('circle')
              .attr('cx', x).attr('cy', y).attr('r', 4)
              .attr('class', 'travel-city-dot')
          }
        })
      })
  }, [])

  return (
    <div className="travel-page">
      <Navbar />
      <div className="page-container">

        <h1 className="page-title">Travels</h1>
        <p className="page-subtitle">Places I've been since 2024: {cities.length} cities · {countryCount} countries · {continentCount} continents</p>
        <div className="section-divider" />

        <div className="travel-stats">
          {[['North America', naCount], ['Europe', euCount], ['Asia', asCount], ['Countries', countryCount]].map(([label, n]) => (
            <div key={label} className="travel-stat">
              <span className="travel-stat-n">{n}</span>
              <span className="travel-stat-l">{label}</span>
            </div>
          ))}
        </div>

        <div className="travel-map-wrap">
          <svg ref={svgRef} />
          {tooltip && (
            <div className="travel-tooltip">
              <span className="travel-tt-city">{tooltip.city}</span>
              <span className="travel-tt-country">{tooltip.country}</span>
            </div>
          )}
        </div>

        <div className="travel-city-grid">
          {cities.map((c, i) => (
            <div key={i} className="travel-city-item">
              <span className="travel-dot" />
              <span className="travel-city-name">{c.city}</span>
              <span className="travel-city-country">{c.country}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}