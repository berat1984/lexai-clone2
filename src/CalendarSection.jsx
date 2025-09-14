import React from 'react';
import { Calendar, Clock, User, Scale, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { getDeadlinePriority, getPriorityColor } from '../../data/mockData';

const CalendarSection = ({ deadlines }) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Generate calendar days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const calendarDays = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const getDeadlinesForDate = (day) => {
    if (!day) return [];
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return deadlines.filter(deadline => deadline.date === dateStr);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Dava tarihi':
        return <Scale size={14} className="text-red-600" />;
      case 'Dilekçe süresi':
        return <FileText size={14} className="text-blue-600" />;
      case 'Toplantı':
        return <User size={14} className="text-green-600" />;
      default:
        return <Clock size={14} className="text-gray-600" />;
    }
  };

  const upcomingDeadlines = deadlines
    .filter(deadline => new Date(deadline.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calendar size={32} className="text-blue-600" />
        <h1 className="text-3xl font-semibold text-gray-900">Takvim</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-lg">
                {new Date(currentYear, currentMonth).toLocaleDateString('tr-TR', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'].map((day) => (
                  <div key={day} className="text-center font-medium text-gray-700 py-2 text-sm">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const isToday = day === today.getDate() && 
                                currentMonth === today.getMonth() && 
                                currentYear === today.getFullYear();
                  const dayDeadlines = getDeadlinesForDate(day);
                  const hasUrgentDeadlines = dayDeadlines.some(d => getDeadlinePriority(d.date) === 'urgent');
                  const hasApproachingDeadlines = dayDeadlines.some(d => getDeadlinePriority(d.date) === 'approaching');
                  
                  return (
                    <div
                      key={index}
                      className={`aspect-square flex flex-col items-center justify-center rounded-lg border cursor-pointer transition-colors text-sm relative ${
                        isToday
                          ? 'bg-blue-500 text-white border-blue-500'
                          : day
                          ? hasUrgentDeadlines
                            ? 'border-red-300 bg-red-50 hover:bg-red-100'
                            : hasApproachingDeadlines
                            ? 'border-yellow-300 bg-yellow-50 hover:bg-yellow-100'
                            : dayDeadlines.length > 0
                            ? 'border-green-300 bg-green-50 hover:bg-green-100'
                            : 'border-gray-200 hover:bg-gray-50'
                          : 'border-transparent'
                      }`}
                    >
                      {day && (
                        <>
                          <span className={isToday ? 'text-white font-bold' : ''}>{day}</span>
                          {dayDeadlines.length > 0 && (
                            <div className="flex gap-1 mt-1">
                              {dayDeadlines.slice(0, 3).map((deadline, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    getDeadlinePriority(deadline.date) === 'urgent'
                                      ? 'bg-red-500'
                                      : getDeadlinePriority(deadline.date) === 'approaching'
                                      ? 'bg-yellow-500'
                                      : 'bg-green-500'
                                  }`}
                                />
                              ))}
                              {dayDeadlines.length > 3 && (
                                <span className="text-xs">+{dayDeadlines.length - 3}</span>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <AlertTriangle size={20} className="text-orange-500" />
                Yaklaşan Görevler
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDeadlines.length === 0 ? (
                <p className="text-gray-500 text-sm">Yaklaşan görev bulunmuyor</p>
              ) : (
                upcomingDeadlines.map((deadline) => {
                  const priority = getDeadlinePriority(deadline.date);
                  return (
                    <div
                      key={deadline.id}
                      className={`p-3 rounded-lg border ${getPriorityColor(priority)}`}
                    >
                      <div className="flex items-start gap-2">
                        {getTypeIcon(deadline.type)}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{deadline.title}</h4>
                          <p className="text-xs opacity-75 mb-1">{deadline.client}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar size={12} />
                            <span>{new Date(deadline.date).toLocaleDateString('tr-TR')}</span>
                            <Clock size={12} />
                            <span>{deadline.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card>
            <CardHeader>
              <h4 className="font-medium">Öncelik Renkleri</h4>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Acil (0-2 gün)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Yaklaşan (3-5 gün)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Güvenli (6+ gün)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
