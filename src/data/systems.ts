import { FileText, Users, Terminal, Globe } from 'lucide-react';
import { SystemItem } from '../types';

export const systems: SystemItem[] = [
  {
    id: 'SYS_VISA',
    type: 'LEGAL & COMPLIANCE',
    title: '외국인 통합 비자지원',
    subtitle: 'VISA & ADMIN SYSTEM',
    description: '출입국 필수 서류 양식 자동 완성 및 외국인 근로자 체류 자격 행정 처리 통합 시스템',
    link: 'https://samho-visa.onrender.com',
    icon: FileText,
    status: 'ONLINE',
    color: 'blue'
  },
  {
    id: 'SYS_FIT',
    type: 'HR EVALUATION',
    title: 'E-7 인성검사 플랫폼',
    subtitle: 'PERSONALITY ASSESSMENT',
    description: '외국인 기술 인력 대상 다국어 지원, 맞춤형 인성 평가 및 조직 적합도 검사',
    link: 'https://samho-fit.onrender.com',
    icon: Users,
    status: 'ONLINE',
    color: 'green'
  },
  {
    id: 'SYS_SKILL',
    type: 'TECHNICAL TEST',
    title: '기량검증 시스템',
    subtitle: 'SKILL VERIFICATION',
    description: '외국인 기술 인력 실무 기량 평가(용접, 취부 및 한국어) 및 데이터 관리',
    link: 'https://samho-skill.onrender.com', 
    icon: Terminal,
    status: 'ONLINE',
    color: 'amber'
  },
  {
    id: 'SYS_CBT',
    type: 'LANGUAGE TEST',
    title: 'TOPIK 모의고사 CBT',
    subtitle: 'KOREAN PROFICIENCY CBT',
    description: '한국어 능력 평가 모의고사 플랫폼',
    link: 'https://samho-topik.onrender.com', 
    icon: Globe,
    status: 'ONLINE',
    color: 'purple'
  }
];
