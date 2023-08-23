// let currentPage = 1; 
// let rowsPerPage = 10;

function resetDataTable() {

    let table = new DataTable('#tableID');

//     function goToPage() { 
//         var start = (currentPage - 1) * rowsPerPage;
//         var end = start + rowsPerPage;
        
//         table.page.len(rowsPerPage).draw();
//         table.page(start / rowsPerPage).draw(false);
        
//         // $('#currentPage').text(currentPage);
//         console.log(currentPage);
//         contactData(currentPage);
//     } 

//     $('#tableID_previous').click(function() { 
//         if (currentPage > 1) {
//             currentPage--;
//             goToPage();
//           } 
//     });

//     $('#tableID_next').click(function() { 
//         if (currentPage < Math.ceil(table.rows().count() / rowsPerPage)) {
//             currentPage++;
//             goToPage();
//           }
//     });

//     table.on('length.dt', function(e, settings, len) {
//         // Your code to handle the dropdown change event
//         console.log('Number of entries per page changed to:', len);
//       }); 
}


let limit = 10;
let skip = 0;
let searchText = '';
let sortBy = '';
let sortOrder = ''

$(document).ready(function(){ 
 contactData();
});

$('#tableID_filter input').on('input', function () { 
    searchText = this.value;
    contactData();
});

let contactData = (skip = 0) => {
// let limit = isset($request->SHOW_ENTRIES) ? '&limit=' . $request->input('SHOW_ENTRIES') : '&limit=10';  

    $.ajax({
        url : 'api/v1/contact/search?name='+searchText+'&skip='+skip+'&limit='+limit+'&sort_by='+sortBy+'&sort_order='+sortOrder,
        method : 'get',
        // data : data,
        contentType: "application/json", 
        dataType: 'json',
        beforeSend: function(){ 
            $('#contactDataTBody').html('');
        },
        success : function(res){ 
            let dynamicData = appendInContactDataTBody(res);
            $('#contactDataTBody').html(dynamicData);
           resetDataTable();
        }

    });
}

let appendInContactDataTBody = (res) => { 
    let html = '';
 
    res.apiRes.map(function (value, index) { 
    index ++;
    html += '<tr><th scope="row">' + index + '</th>';
    html += '<td>' + value.name + '</td>';
    html += '<td>' + value.email + '</td>';
    html += '<td> +91 ' + value.phone + '</td>';
    html += '</tr>'; 
});

return html;
}