import {
  Home,
  Building2,
  Boxes,
  Truck,
  Trash2,
  Sofa,
  ShieldCheck,
  Clock,
  BadgeEuro,
  BadgeCheck,
  Heart,
  Award,
  Phone,
  PhoneCall,
  MapPin,
  Mail,
  Check,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Navigation,
  Star,
  Search,
  Sparkles,
  Users,
  PackageCheck,
  Route,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

const map = {
  Home,
  Building2,
  Boxes,
  Truck,
  Trash2,
  Sofa,
  ShieldCheck,
  Clock,
  BadgeEuro,
  BadgeCheck,
  Heart,
  Award,
  Phone,
  PhoneCall,
  MapPin,
  Mail,
  Check,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Navigation,
  Star,
  Search,
  Sparkles,
  Users,
  PackageCheck,
  Route,
  CalendarCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof map;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name as IconName] ?? Truck;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
