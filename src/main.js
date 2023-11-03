import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import Button from "primevue/button"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';                   

createApp(App).mount('#app')
const app = createApp(App);
app.use(PrimeVue);

app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);

