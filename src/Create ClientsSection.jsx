import React from 'react';
import { Users, Phone, Mail, Briefcase, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

const ClientsSection = ({ clients }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Aktif':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Tamamlandı':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Beklemede':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Aktif':
        return <Clock size={12} />;
      case 'Tamamlandı':
        return <CheckCircle size={12} />;
      default:
        return <Clock size={12} />;
    }
  };

  if (clients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <Users size={48} className="text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Müvekkil bulunamadı</h3>
        <p className="text-gray-500">Aramanızı ayarlayın veya yeni müvekkil ekleyin</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Müvekkiller</h1>
        <div className="text-sm text-gray-500">
          {clients.length} {clients.length === 1 ? 'müvekkil' : 'müvekkil'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                      {client.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {getStatusIcon(client.status)}
                      <Badge className={`text-xs ${getStatusColor(client.status)}`}>
                        {client.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={14} />
                  <span>{client.caseType}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={12} />
                  <span>Başlangıç: {new Date(client.startDate).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
