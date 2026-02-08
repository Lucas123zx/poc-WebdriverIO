export const ListUsersElements = {
    title: 'h1',
    titleCollunList: 'thead tr th',
    colUser: 'td',
    colNames: 'td:nth-child(1)',
    colEmail: 'td:nth-child(2)',
    colPassword: 'td:nth-child(3)',
    colAdmin: 'td:nth-child(4)',
    
    // Botões de ação (primeira ocorrência)
    btnEdit: '(//button[@type="button"][normalize-space()="Editar"])[1]',
    btnDelete: '(//button[@type="button"][normalize-space()="Excluir"])[1]',
    
    // Lista de elementos (Array)
    tblUsers: 'table tbody tr'
};