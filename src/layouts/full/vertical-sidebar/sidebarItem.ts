import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, LicenseIcon, TypographyIcon, UserPlusIcon, CashBanknoteIcon,
    NotesIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'vendas' },
    {
        title: 'Pedido de Venda',
        icon: NotesIcon,
        to: '/login',
    },
    {
        title: 'Notas Fiscais',
        icon: LicenseIcon,
        to: '/login'
    },
    { header: 'crediário' },
    {
        title: 'Motor de Credito',
        icon: TypographyIcon,
        to: '/motorCredito'
    },
    {
        title: 'Propostas de Credito',
        icon: CopyIcon,
        to: '/login'
    },
    { header: 'Financeiro' },
    {
        title: 'Conciliação',
        icon: CashBanknoteIcon,
        to: '/login'
    },
    {
        title: 'Extrato Bancario',
        icon: ApertureIcon,
        to: '/login'
    },
    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/login'
    },
    {
        title: 'Registrar',
        icon: UserPlusIcon,
        to: '/auth/register'
    },

];

export default sidebarItem;
