import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Target, Award, AlertCircle, CheckCircle } from 'lucide-react';

const KIACompetitionAnalysis = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedCompetitor, setSelectedCompetitor] = useState('Toyota');

  // Datos basados en la investigación realizada
  const marketShareData = [
    { brand: 'Toyota', share: 15.8, b2bShare: 18.2, growth: 2.1, color: '#FF6B6B' },
    { brand: 'Volkswagen', share: 12.4, b2bShare: 16.8, growth: -1.5, color: '#4ECDC4' },
    { brand: 'KIA', share: 5.9, b2bShare: 8.3, growth: 4.3, color: '#45B7D1' },
    { brand: 'Hyundai', share: 5.2, b2bShare: 7.1, growth: 3.8, color: '#96CEB4' },
    { brand: 'Ford', share: 4.8, b2bShare: 9.2, growth: -2.3, color: '#FFEAA7' },
    { brand: 'Nissan', share: 4.5, b2bShare: 6.8, growth: -1.8, color: '#DDA0DD' },
    { brand: 'Renault', share: 4.2, b2bShare: 5.9, growth: 1.2, color: '#F39C12' },
    { brand: 'Peugeot', share: 3.9, b2bShare: 5.4, growth: 0.8, color: '#E74C3C' }
  ];

  const competitorProfiles = {
    Toyota: {
      strengths: ['Fiabilidad reconocida', 'Red de servicios extensa', 'Híbridos consolidados', 'Valor de reventa alto'],
      weaknesses: ['Precios premium', 'Diseño conservador', 'Tecnología conectada limitada'],
      b2bStrategy: 'Enfoque en fiabilidad y costes operativos bajos',
      priceRange: 'Premium',
      fleetVolume: '18.2%',
      mainModels: ['Corolla', 'RAV4', 'Hilux', 'Proace']
    },
    Volkswagen: {
      strengths: ['Calidad alemana', 'Amplia gama', 'Tecnología avanzada', 'Financiación atractiva'],
      weaknesses: ['Costes de mantenimiento', 'Complejidad técnica', 'Fiabilidad cuestionada'],
      b2bStrategy: 'Soluciones integrales de movilidad',
      priceRange: 'Premium',
      fleetVolume: '16.8%',
      mainModels: ['Golf', 'Tiguan', 'T-Roc', 'Caddy']
    },
    Hyundai: {
      strengths: ['Garantía extendida', 'Relación precio-calidad', 'Diseño atractivo', 'Electrificación'],
      weaknesses: ['Percepción de marca', 'Red de servicios menor', 'Valor de reventa'],
      b2bStrategy: 'Competencia directa con KIA, precios agresivos',
      priceRange: 'Medio-Alto',
      fleetVolume: '7.1%',
      mainModels: ['Tucson', 'i30', 'Santa Fe', 'i20']
    },
    Ford: {
      strengths: ['Tradición comercial', 'Vehículos comerciales', 'Tecnología Ford Sync', 'Presencia global'],
      weaknesses: ['Fiabilidad variable', 'Costes operativos', 'Gama reducida'],
      b2bStrategy: 'Especialización en vehículos comerciales',
      priceRange: 'Medio',
      fleetVolume: '9.2%',
      mainModels: ['Focus', 'Kuga', 'Transit', 'Ranger']
    }
  };

  const radarData = [
    { subject: 'Precio/Valor', KIA: 85, competitor: competitorProfiles[selectedCompetitor] ? 65 : 70 },
    { subject: 'Fiabilidad', KIA: 75, competitor: selectedCompetitor === 'Toyota' ? 95 : 70 },
    { subject: 'Diseño', KIA: 90, competitor: 75 },
    { subject: 'Tecnología', KIA: 85, competitor: selectedCompetitor === 'Volkswagen' ? 90 : 75 },
    { subject: 'Red Servicios', KIA: 70, competitor: selectedCompetitor === 'Toyota' ? 95 : 80 },
    { subject: 'Garantía', KIA: 95, competitor: selectedCompetitor === 'Hyundai' ? 90 : 65 }
  ];

  const opportunitiesData = [
    { opportunity: 'Electrificación B2B', potential: 'Alto', timeline: 'Inmediato', kiaPosition: 'Fuerte' },
    { opportunity: 'Renting/Leasing', potential: 'Alto', timeline: '6 meses', kiaPosition: 'Medio' },
    { opportunity: 'Servicios Digitales', potential: 'Medio', timeline: '12 meses', kiaPosition: 'Medio' },
    { opportunity: 'Flotas Pequeñas', potential: 'Alto', timeline: 'Inmediato', kiaPosition: 'Fuerte' },
    { opportunity: 'Vehículos Comerciales', potential: 'Medio', timeline: '18 meses', kiaPosition: 'Débil' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">KIA B2B - Análisis de Competencia</h1>
          <p className="text-blue-200">Dashboard interactivo para análisis estratégico del mercado de flotas</p>
        </div>

        {/* Navigation */}
        <div className="flex space-x-2 mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-2">
          {[
            { id: 'overview', label: 'Vista General' },
            { id: 'competitors', label: 'Competidores' },
            { id: 'opportunities', label: 'Oportunidades' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id)}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedView === tab.id 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-blue-200 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vista General */}
        {selectedView === 'overview' && (
          <div className="space-y-6">
            {/* KPIs Principales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Cuota B2B</p>
                    <p className="text-3xl font-bold text-white">8.3%</p>
                  </div>
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-sm">+4.3% vs año anterior</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Posición Mercado</p>
                    <p className="text-3xl font-bold text-white">#3</p>
                  </div>
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-yellow-400 text-sm mt-2">En segmento B2B</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Vs Competencia</p>
                    <p className="text-3xl font-bold text-white">+2.1%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-green-400 text-sm mt-2">Crecimiento superior</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Oportunidad</p>
                    <p className="text-3xl font-bold text-white">Alta</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-green-400 text-sm mt-2">Electrificación + Precio</p>
              </div>
            </div>

            {/* Gráfico de Cuotas de Mercado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Cuota de Mercado B2B (%)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={marketShareData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="brand" stroke="#e2e8f0" />
                    <YAxis stroke="#e2e8f0" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Bar dataKey="b2bShare" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Crecimiento Anual (%)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={marketShareData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="brand" stroke="#e2e8f0" />
                    <YAxis stroke="#e2e8f0" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Bar 
                      dataKey="growth" 
                      fill={(entry) => entry.growth > 0 ? '#10b981' : '#ef4444'}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Vista Competidores */}
        {selectedView === 'competitors' && (
          <div className="space-y-6">
            {/* Selector de Competidor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Seleccionar Competidor para Análisis:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.keys(competitorProfiles).map(competitor => (
                  <button
                    key={competitor}
                    onClick={() => setSelectedCompetitor(competitor)}
                    className={`p-3 rounded-lg transition-all ${
                      selectedCompetitor === competitor
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-blue-200 hover:bg-white/20'
                    }`}
                  >
                    {competitor}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Radar Chart Comparativo */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">KIA vs {selectedCompetitor}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#ffffff20" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} />
                    <Radar name="KIA" dataKey="KIA" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Radar name={selectedCompetitor} dataKey="competitor" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Perfil del Competidor */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Perfil: {selectedCompetitor}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Fortalezas:</h4>
                    <ul className="text-sm text-blue-200 space-y-1">
                      {competitorProfiles[selectedCompetitor].strengths.map((strength, i) => (
                        <li key={i}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Debilidades:</h4>
                    <ul className="text-sm text-blue-200 space-y-1">
                      {competitorProfiles[selectedCompetitor].weaknesses.map((weakness, i) => (
                        <li key={i}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Estrategia B2B:</h4>
                    <p className="text-sm text-blue-200">{competitorProfiles[selectedCompetitor].b2bStrategy}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-xs text-blue-300">Cuota Flotas:</span>
                      <p className="text-lg font-semibold text-white">{competitorProfiles[selectedCompetitor].fleetVolume}</p>
                    </div>
                    <div>
                      <span className="text-xs text-blue-300">Rango Precio:</span>
                      <p className="text-lg font-semibold text-white">{competitorProfiles[selectedCompetitor].priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vista Oportunidades */}
        {selectedView === 'opportunities' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Análisis de Oportunidades B2B</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-blue-200 pb-3">Oportunidad</th>
                      <th className="text-left text-blue-200 pb-3">Potencial</th>
                      <th className="text-left text-blue-200 pb-3">Timeline</th>
                      <th className="text-left text-blue-200 pb-3">Posición KIA</th>
                      <th className="text-left text-blue-200 pb-3">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunitiesData.map((opp, i) => (
                      <tr key={i} className="border-b border-white/10">
                        <td className="py-3 text-white font-medium">{opp.opportunity}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            opp.potential === 'Alto' ? 'bg-green-500/20 text-green-400' :
                            opp.potential === 'Medio' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {opp.potential}
                          </span>
                        </td>
                        <td className="py-3 text-blue-200">{opp.timeline}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            opp.kiaPosition === 'Fuerte' ? 'bg-green-500/20 text-green-400' :
                            opp.kiaPosition === 'Medio' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {opp.kiaPosition}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors">
                            Ver Plan
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recomendaciones Estratégicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-green-400 mb-4">Ventajas Competitivas KIA</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>✓ <strong>Precio competitivo</strong> vs Toyota/VW</li>
                  <li>✓ <strong>Garantía líder</strong> 7 años</li>
                  <li>✓ <strong>Diseño moderno</strong> atractivo para flotas</li>
                  <li>✓ <strong>Crecimiento sostenido</strong> +4.3% anual</li>
                  <li>✓ <strong>Gama electrificada</strong> en expansión</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">Áreas de Mejora</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>⚠ <strong>Red de servicios</strong> vs Toyota</li>
                  <li>⚠ <strong>Percepción B2B</strong> vs marcas premium</li>
                  <li>⚠ <strong>Vehículos comerciales</strong> gama limitada</li>
                  <li>⚠ <strong>Servicios digitales</strong> menos desarrollados</li>
                  <li>⚠ <strong>Presencia regional</strong> heterogénea</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KIACompetitionAnalysis;
