/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
  'Add Allowlist': 'Add Allowlist',
  'Create Network Policy': 'Create Network Policy',
  Direction: 'Direction',
  Egress: 'Egress',
  Ingress: 'Ingress',
  'Network Isolation': 'Network Isolation',
  'Network Policies': 'Network Policies',
  'Network Policy': 'Network Policy',
  'Traffic Egress': 'Traffic Egress',
  'Traffic Ingress': 'Traffic Ingress',
  
  'Network Policys': 'Políticas de red',
  NETWORK_POLICY_DESC: 'La configuración de la política de red permite el aislamiento de la red dentro del mismo clúster, lo que significa que se pueden configurar firewalls entre ciertas instancias (Pods).',
  NETWORK_ISOLATION_DESC: 'Al configurar el aislamiento de la red para controlar el tráfico entre Pods dentro del mismo clúster y el tráfico del exterior, las aplicaciones se aíslan y se mejora la seguridad.',
  NETWORK_POLICY_Q: '¿Cómo usar mejor una política de red?',
  NETWORK_ISOLATION_Q: '¿Cómo usar mejor el aislamiento de red?',
  NETWORK_POLICY_A: 'Hemos compilado varios escenarios de aplicación comunes basados en los escenarios reales, y puede consultar la documentación para obtener más información.',
  NETWORK_POLICY_Q1: 'Requisito para implementar una política de red',
  NETWORK_ISOLATION_Q1: 'Requisito para implementar aislamiento de red',
  NETWORK_POLICY_A1: 'Asegúrese de que el complemento de red CNI utilizado por el clúster sea compatible con <a href="https://kubernetes.io/docs/concepts/services-networking/network-policies/" target="_blank">NetworkPolicy</a> . Existen varios complementos de red CNI que admiten NetworkPolicy, incluidos Calico, Cilium, Kube-router, Romana y Weave Net.',
  NETWORK_POLICY_EMP_TITLE: 'Proyecto de aislamiento de red no habilitado',
  NETWORK_POLICY_EMP_DESC: 'Otros proyectos en el clúster pueden acceder al proyecto actual según la configuración del espacio de trabajo. Una vez que el aislamiento de la red está habilitado para el proyecto, otros proyectos no podrán acceder a él, mientras que aún puede personalizar proyectos específicos, servicios o direcciones externas que se pueden liberar.',
  NETWORK_POLICY_STATUS: 'Proyecto de aislamiento de red',
  NETWORK_POLICY_R_DESC1: 'Puede configurar el acceso a los siguientes recursos (que coincidan con cualquiera de las siguientes políticas)',
  NETWORK_POLICY_R_DESC2: 'Se puede permitir que los siguientes recursos accedan al proyecto actual (que coincida con cualquiera de las siguientes políticas)',
  NETWORK_POLICY_R1_TITLE: 'Lista de permiso interno del clúster',
  NETWORK_POLICY_R1_DESC: 'Permitir acceso a servicios dentro del clúster',
  NETWORK_POLICY_R1_DESC1: 'Seleccione un proyecto o servicio específico como miembro de la lista de permisos para que estos recursos puedan acceder al proyecto actual.',
  NETWORK_POLICY_R2_TITLE: 'Dirección IP externa del clúster',
  NETWORK_POLICY_R2_DESC: 'Permitir acceso para CIRD fuera del clúster',
  NETWORK_POLICY_R2_DESC1: 'Seleccione un rango específico de IP CIDR como origen de entrada o destino de salida.',
  NETWORK_POLICY_D_DESC: 'Haga coincidir el tráfico de salida y el tráfico de entrada',
  NETWORK_POLICY_D_DESC2: 'CIDR es una cadena que representa un bloque de IP válido, como &quot;192.168.1.1/24&quot;.',
  NETWORK_POLICY_D_OP1: 'Salida',
  NETWORK_POLICY_D_OP2: 'Ingreso',
  NETWORK_POLICY_CREATE_DESC: 'La política de red está configurada para permitir el aislamiento de la red dentro del mismo clúster, es decir, la capacidad de construir un firewall entre ciertas instancias (pods).',
  CIDR_DESC: 'Basado en la dirección del tráfico',

}