import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const table: AppRouteModule = {
  path: '/table',
  name: 'TableDemo',
  component: LAYOUT,
  redirect: '/table/vxe',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'VxeTable',
  },
  children: [
    {
      path: 'vxe',
      name: 'VxeTableDemo',
      component: () => import('@/views/demo/table/VxeTable.vue'),
      meta: {
        affix: true,
        title: 'VxeTable示例',
      },
    },
  ],
};

export default table;
