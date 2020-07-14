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
  Interval: 'Intervalo',
  Last: 'Último',
  TIME_M: '{num, plural, = 1 {1 minuto} otro {# minutos}}',
  TIME_H: '{num, plural, = 1 {1 hora} otro {# horas}}',
  TIME_D: '{num, plural, = 1 {1 día} otro {# días}}',
  UTILIZATION: 'Utilización',
  RESOURCE_USAGE_TITLE: 'Uso de recursos',
  MONITORING_CLUSTER_DESC: 'Puede supervisar el estado de ejecución del clúster en este módulo.',
  MONITORING_PHYSICAL_DESC: 'Supervisar el estado de ejecución de los recursos físicos.',
  MONITORING_APPLICATION_DESC: 'Puede supervisar el estado de ejecución de los recursos de la aplicación en este módulo.',
  TIMERANGE_SELECTOR_MSG: 'La hora de finalización debe ser posterior a la hora de inicio',
  MONITORING_SELECT_LIMIT_MSG: 'Puedes seleccionar hasta diez recursos',
  AVERAGE: 'Promedio',
  TOTAL_AVERAGE: 'Total',
  SCHEDULED_SUCCESS: 'Programado',
  SCHEDULED_ERROR: 'Error',
  SCHEDULED_FAIL: 'No programable',
  ETCD_NODE_TITLE: 'Nodo ETCD',
  ETCD_LEADER_TITLE: '¿Hay un líder?',
  ETCD_CHANGES_TITLE: 'Tiempos de cambio de líder (dentro de 1 hora)',
  ETCD_STATUS: '<span>Estado del</span> servicio',
  ETCD_PROPOSAL: '<span>Propuesta de</span> balsa',
  ETCD_DB_SIZE: '<span>Tamaño</span> DB',
  ETCD_CLIENT_TRAFFIC: '<span>Tráfico de</span> clientes',
  REQUEST_LATENCY: 'Solicitar <span>latencia</span>',
  REQUEST_RATE: '<span>Tasa de</span> solicitud',
  ATTEMPT_FREQUENCY: 'Intento de <span>frecuencia</span>',
  ATTEMPT_RATE: '<span>Tasa de</span> intento',
  PROPOSAL_COMMITTED: 'Comprometido',
  PROPOSAL_APPLIED: 'Aplicado',
  PROPOSAL_FAILED: 'Ha fallado',
  PROPOSAL_PENDING: 'Pendiente',
  CustomMonitorDashboards: 'Paneles de control personalizados',
  CUSTOMMONITORDASHBOARD_DESC: 'Los usuarios pueden definir sus paneles de monitoreo de aplicaciones de acuerdo con sus propias necesidades.',
  CUSTOMMONITORDASHBOARD_CREATE_DESC: 'Los usuarios pueden definir sus paneles de monitoreo de aplicaciones de acuerdo con sus propias necesidades.',
  ADD_MONITOR_ITEM: 'Agregar elemento de monitoreo',
  ADD_MONITOR_ROW: 'Agregar grupo de monitoreo',
  SELECT_CHART_TYPE: 'Seleccione un tipo de gráfico',
  SELECT_CHART_TYPE_MODAL_DESC: 'Seleccione un tipo de gráfico personalizado',
  GRAPH_TYPES: 'Tipos de carta',
  LINE_CHART: 'Gráfico de linea',
  BAR_CHART: 'Gráfico de barras',
  SINGLE_STATE_CHART: 'Texto en tiempo real',
  DISPLAY_POSITION: 'Posición de visualización',
  APPLICABLE_SCENE: 'Escenario aplicable',
  BASE_LINE_CHART: 'Gráfico de línea base',
  BASE_BAR_CHART: 'Gráfico de barras base',
  STACK_LINE_CHART: 'Gráfico de área apilada',
  STACK_BAR_CHART: 'Gráfico de barras apiladas',
  LINE_CHART_DESC: 'Un gráfico de líneas se utiliza principalmente para visualizar una tendencia o un cambio en los datos a lo largo del tiempo.',
  BASE_LINE_CHART_DESC: 'Un gráfico de líneas se utiliza principalmente para visualizar una tendencia o un cambio en los datos a lo largo del tiempo. Es muy útil para mostrar una serie de datos continuos bidimensionales, como el tráfico del sitio web o los precios de los productos.',
  STACK_LINE_CHART_DESC: 'Un gráfico de área apilada es un tipo especial de gráficos de área que se pueden usar para comparar múltiples variables en un intervalo. Es muy útil cuando hay varias series de datos disponibles, ya que puede analizar la relación de cada grupo con todo el gráfico y mostrar su proporción respectiva.',
  BAR_CHART_DESC: 'Un gráfico de barras es el tipo más común de gráficos. Presenta diferentes datos categóricos con barras horizontales o verticales con alturas o longitudes proporcionales a los valores que representan.',
  BASE_BAR_CHART_DESC: 'Un eje del gráfico de barras base presenta las categorías que se comparan, mientras que el otro eje representa el valor de cada una.',
  STACK_BAR_CHART_DESC: 'Un gráfico de barras apiladas es una extensión de los gráficos de barras. Un gráfico de barras estándar compara puntos de datos individuales entre sí, mientras que en un gráfico de barras apiladas, partes de los datos son adyacentes o apiladas. Se puede usar para presentar la cantidad total de una categoría, así como sus sub-cantidades (proporción). Por lo tanto, es muy útil para examinar las relaciones entre partes.',
  DISPLAY_FORMAT: 'Desplegar formato',
  FIELD_NAME: 'Nombre del campo',
  COLUMN_NAME: 'Nombre de columna',
  GRAPH_NAME: 'Nombre del gráfico',
  DECIMALS: 'Lugares decimales',
  TABLE: 'Mesa',
  TABLE_SETTINGS: 'Configuraciones de tabla',
  VALUE_FOMATER: 'Formato de valor',
  PER_PAGE_LINES: 'Líneas por página',
  CUSTOM_DISPLAY_STYLE: 'Estilo de pantalla',
  DATA_TYPE: 'Tipo de datos',
  CUSTOM_DISPLAY_MODAL_DESC: 'Personalice el estilo de visualización de la tabla según sus necesidades',
  Y_AXIS: 'Y Axis',
  GRAPH_COLORS: 'Carta de colores',
  SINGLE_GRAPH_TYPE: 'El tipo de gráfico más común.',
  SINGLE_GRAPH_TYPE_NAME: 'Gráfico Básico',
  STACKED_GRAPH_TYPE: 'Gráfico apilado',
  STACKED_GRAPH_TYPE_DESC: 'Útil para mostrar relaciones de parte a todo',
  MONITOR_TYPE_NO_SUPPORT: 'El tipo no es compatible actualmente',
  MONITOR_METRICS: 'Monitoreo de métricas',
  METRIC_NAME: 'Nombre métrico',
  DEBUGB_DATA: 'Depuración de datos',
  TIME_FORMAT: 'Formato de tiempo',
  HIGHT_RULES: 'Reglas destacadas',
  EDIT_TEMPLATE: 'Editar plantilla',
  SAVE_TEMPLATE: 'Guardar plantilla',
  THRESHOLD_FILL: 'Configuraciones de umbral',
  THRESHOLD_FILL_DESC: 'Puede establecer un umbral y el estilo se puede cambiar automáticamente una vez que se supera el umbral.',

}