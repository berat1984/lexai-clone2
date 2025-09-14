import React, { useState } from 'react';
import { 
  Home, 
  Inbox, 
  FileText, 
  Calendar, 
  FolderOpen, 
  Settings, 
  Trash2, 
  Search,
  ChevronDown,
  User,
  Mail,
  LogOut,
  Users,
  Scale
} from 'lucide-react';
import { mockUser } from '../data/mockData';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';

const Sidebar = ({ activeSection, setActiveSection, searchQuery, setSearchQuery }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Ana Sayfa', icon: Home },
    { id: 'inbox', label: 'Gelen Kutusu', icon: Inbox, badge: 3 },
  ];

  const officeItems = [
    { id: 'notes', label: 'Notlar', icon: FileText },
    { id: 'calendar', label: 'Takvim', icon: Calendar },
    { id: 'files', label: 'Dosyalar', icon: FolderOpen },
    { id: 'clients', label: 'Müvekkiller', icon: Users },
    { id: 'casefiles', label: 'Dava Dosyaları', icon: Scale },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Ayarlar', icon: Settings },
    { id: 'trash', label: 'Çöp Kutusu', icon: Trash2 },
  ];

  const MenuItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-blue-50 text-blue-700 shadow-sm'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <Icon size={18} />
        <span className="flex-1 text-left">{item.label}</span>
        {item.badge && (
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col shadow-sm">
      {/* User Info */}
      <div className="p-4 border-b border-gray-100">
        <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 p-2 h-auto hover:bg-gray-50"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-sm font-medium">
                  {mockUser.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="font-medium text-sm text-gray-900">{mockUser.name}</div>
                <div className="text-xs text-gray-500">{mockUser.email}</div>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem className="gap-2">
              <Settings size={16} />
              <span>Ayarlar</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Mail size={16} />
              <span>E-posta</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <LogOut size={16} />
              <span>Çıkış Yap</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Notlar, dosyalar, müvekkiller ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4 pb-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => setActiveSection(item.id)}
            />
          ))}
        </div>

        <div className="mt-6">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Hukuk Ofisi
          </div>
          <div className="space-y-1 mt-2">
            {officeItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="space-y-1">
            {bottomItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
