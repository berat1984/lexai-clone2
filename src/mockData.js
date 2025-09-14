// Mock data for LexAI - Legal Workspace
export const mockUser = {
  name: "Av. John Doe",
  email: "john@lexai.com",
  avatar: "AD",
  title: "Avukat"
};

export const mockNotes = [
  {
    id: 1,
    title: "Hukuki Görüş Taslağı",
    content: "Müvekkil için hazırlanan hukuki görüş taslağı ve analiz notları",
    createdAt: "2024-01-15",
    tags: ["hukuki-görüş", "analiz"]
  },
  {
    id: 2,
    title: "Mahkeme Duruşma Notları",
    content: "15 Ocak tarihli duruşma sırasında alınan önemli notlar",
    createdAt: "2024-01-14",
    tags: ["duruşma", "mahkeme"]
  },
  {
    id: 3,
    title: "Müvekkil Görüşme Notları",
    content: "Müvekkil ile yapılan görüşmede çıkan önemli konular",
    createdAt: "2024-01-13",
    tags: ["müvekkil", "görüşme"]
  },
  {
    id: 4,
    title: "Kanun Araştırması",
    content: "İlgili kanun maddeleri ve içtihat araştırması sonuçları",
    createdAt: "2024-01-12",
    tags: ["araştırma", "kanun"]
  },
  {
    id: 5,
    title: "Vekalet Sözleşmesi Notları",
    content: "Yeni müvekkil için vekalet sözleşmesi hazırlık notları",
    createdAt: "2024-01-11",
    tags: ["vekalet", "sözleşme"]
  }
];

export const mockFiles = [
  {
    id: 1,
    name: "Dava Dilekçesi.pdf",
    type: "pdf",
    size: "2.4 MB",
    modifiedAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Müvekkil Beyannı.docx",
    type: "document",
    size: "890 KB",
    modifiedAt: "2024-01-14"
  },
  {
    id: 3,
    name: "Mali Durum Tablosu.xlsx",
    type: "spreadsheet",
    size: "456 KB",
    modifiedAt: "2024-01-13"
  },
  {
    id: 4,
    name: "Delil Fotoğrafları.zip",
    type: "archive",
    size: "8.1 MB",
    modifiedAt: "2024-01-12"
  },
  {
    id: 5,
    name: "Mahkeme Kaydı.mp4",
    type: "video",
    size: "128 MB",
    modifiedAt: "2024-01-11"
  }
];

export const mockClients = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@email.com",
    phone: "0532 123 45 67",
    caseType: "İş Hukuku",
    status: "Aktif",
    startDate: "2024-01-10"
  },
  {
    id: 2,
    name: "Fatma Kaya",
    email: "fatma.kaya@email.com",
    phone: "0533 987 65 43",
    caseType: "Aile Hukuku",
    status: "Aktif",
    startDate: "2024-01-05"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    email: "mehmet.demir@email.com",
    phone: "0534 456 78 90",
    caseType: "Ceza Hukuku",
    status: "Tamamlandı",
    startDate: "2023-12-15"
  },
  {
    id: 4,
    name: "Ayşe Şahin",
    email: "ayse.sahin@email.com",
    phone: "0535 321 09 87",
    caseType: "Ticaret Hukuku",
    status: "Aktif",
    startDate: "2024-01-08"
  }
];

export const mockCaseFiles = [
  {
    id: 1,
    caseNumber: "2024/123",
    title: "Yılmaz vs. ABC Şirketi",
    client: "Ahmet Yılmaz",
    caseType: "İş Hukuku",
    status: "Devam Ediyor",
    nextHearing: "2024-02-15",
    lawyer: "Av. John Doe",
    createdAt: "2024-01-10"
  },
  {
    id: 2,
    caseNumber: "2024/124",
    title: "Kaya Boşanma Davası",
    client: "Fatma Kaya",
    caseType: "Aile Hukuku",
    status: "Devam Ediyor",
    nextHearing: "2024-02-10",
    lawyer: "Av. John Doe",
    createdAt: "2024-01-05"
  },
  {
    id: 3,
    caseNumber: "2023/456",
    title: "Demir Ceza Davası",
    client: "Mehmet Demir",
    caseType: "Ceza Hukuku",
    status: "Tamamlandı",
    nextHearing: null,
    lawyer: "Av. John Doe",
    createdAt: "2023-12-15"
  },
  {
    id: 4,
    caseNumber: "2024/125",
    title: "Şahin Ticari Uyuşmazlık",
    client: "Ayşe Şahin",
    caseType: "Ticaret Hukuku",
    status: "Devam Ediyor",
    nextHearing: "2024-02-20",
    lawyer: "Av. John Doe",
    createdAt: "2024-01-08"
  }
];

export const mockDeadlines = [
  {
    id: 1,
    title: "Yılmaz Davası Duruşması",
    type: "Dava tarihi",
    date: "2024-02-03",
    time: "09:30",
    client: "Ahmet Yılmaz",
    caseNumber: "2024/123",
    priority: "high"
  },
  {
    id: 2,
    title: "Kaya Davası Cevap Dilekçesi",
    type: "Dilekçe süresi",
    date: "2024-02-05",
    time: "17:00",
    client: "Fatma Kaya",
    caseNumber: "2024/124",
    priority: "medium"
  },
  {
    id: 3,
    title: "Müvekkil Görüşmesi - Şahin",
    type: "Toplantı",
    date: "2024-02-07",
    time: "14:00",
    client: "Ayşe Şahin",
    caseNumber: "2024/125",
    priority: "low"
  },
  {
    id: 4,
    title: "İcra Takip Dilekçesi",
    type: "Dilekçe süresi",
    date: "2024-02-10",
    time: "16:00",
    client: "Ahmet Yılmaz",
    caseNumber: "2024/123",
    priority: "low"
  },
  {
    id: 5,
    title: "Şahin Davası Duruşması",
    type: "Dava tarihi",
    date: "2024-02-12",
    time: "10:15",
    client: "Ayşe Şahin",
    caseNumber: "2024/125",
    priority: "medium"
  }
];

export const mockNotifications = [
  {
    id: 1,
    title: "Yeni dava dosyası eklendi",
    message: "Ahmet Yılmaz için yeni dava dosyası oluşturuldu",
    time: "2 saat önce",
    unread: true
  },
  {
    id: 2,
    title: "Duruşma hatırlatması",
    message: "Yarın saat 09:30'da Yılmaz davası duruşması",
    time: "5 saat önce",
    unread: true
  },
  {
    id: 3,
    title: "Dilekçe süresi yaklaşıyor",
    message: "Kaya davası cevap dilekçesi için 2 gün kaldı",
    time: "1 gün önce",
    unread: false
  }
];

// Helper function to get deadline priority based on days until deadline
export const getDeadlinePriority = (deadlineDate) => {
  const today = new Date();
  const deadline = new Date(deadlineDate);
  const diffTime = deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 2) return 'urgent'; // Red
  if (diffDays <= 5) return 'approaching'; // Yellow
  return 'safe'; // Green
};

// Helper function to get priority color
export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'urgent':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'approaching':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'safe':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}; 
