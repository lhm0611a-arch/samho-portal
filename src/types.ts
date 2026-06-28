import { LucideIcon } from 'lucide-react';

export interface SystemItem {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: LucideIcon;
  status: 'ONLINE' | 'STANDBY';
  color: string;
}
