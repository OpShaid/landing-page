'use client'

import React from 'react'

const clients = [
  { name: 'TechCorp', color: 'from-blue-500 to-cyan-500' },
  { name: 'Innovate Inc', color: 'from-purple-500 to-pink-500' },
  { name: 'StartupHub', color: 'from-green-500 to-teal-500' },
  { name: 'CloudBase', color: 'from-orange-500 to-red-500' },
  { name: 'DataFlow', color: 'from-indigo-500 to-blue-500' },
  { name: 'GrowthLabs', color: 'from-pink-500 to-rose-500' },
]

export default function ClientLogos() {
  return (
    <section className="py-16 px-4 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center animate-fade-in hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${client.color} p-4 rounded-lg shadow-md`}>
                <span className="text-white font-bold text-xs whitespace-nowrap">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
