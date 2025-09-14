import React from 'react';
import { Scale, User, Calendar, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

const CaseFilesSection = ({ caseFiles }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Devam Ediyor':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Tamamlandı':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Askıda':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'İptal':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Devam Ediyor':
        return <Clock size={12} />;
      case 'Tamamlandı':
        return <CheckCircle size={12} />;
      case 'Askıda':
        return <AlertCircle size={12} />;
      default:
        return <Clock size={12} />;
    }
  };

  const getCaseTypeColor = (caseType) => {
    switch (caseType) {
      case 'İş Hukuku':
        return 'bg-purple-100 text-purple-800';
      case 'Aile Hukuku':
        return 'bg-pink-100 text-pink-800';
      case 'Ceza Hukuku':
        return 'bg-red-100 text-red-800';
      case 'Ticaret Hukuku':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (caseFiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <Scale size={48} className="text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Dava dosyası bulunamadı</h3>
        <p className="text-gray-500">Aramanızı ayarlayın veya yeni dava dosyası ekleyin</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dava Dosyaları</h1>
        <div className="text-sm text-gray-500">
          {caseFiles.length} {caseFiles.length === 1 ? 'dava' : 'dava'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {caseFiles.map((caseFile) => (
          <Card key={caseFile.id} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Scale size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors truncate">
                      {caseFile.title}
                    </h3>
                    <p className="text-sm text-gray-500">Dosya No: {caseFile.caseNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(caseFile.status)}
                  <Badge className={`text-xs ${getStatusColor(caseFile.status)}`}>
                    {caseFile.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User size={14} />
                  <span>{caseFile.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-gray-400" />
                  <Badge className={`text-xs ${getCaseTypeColor(caseFile.caseType)}`}>
                    {caseFile.caseType}
                  </Badge>
                </div>
                {caseFile.nextHearing && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>Sonraki Duruşma: {new Date(caseFile.nextHearing).toLocaleDateString('tr-TR')}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>Oluşturulma: {new Date(caseFile.createdAt).toLocaleDateString('tr-TR')}</span>
                </div>
                <div className="text-xs text-gray-500">
                  {caseFile.lawyer}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseFilesSection;
