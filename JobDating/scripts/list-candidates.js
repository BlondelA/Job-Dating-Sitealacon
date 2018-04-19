$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/api/v1/candidates"
    }).then(function(data) {
        var result = JSON.parse(data);
        console.log(result.data[0].nom_candidat);

        for (var i = 0, len = result.data.length; i < len; i++)
        {
            $('.candidates').append('<tr>');
            $('.candidates').append('<th scope="row">'+ i + '</th>');
            $('.candidates').append('<td>'+ result.data[i].mail_candidat + '</td');
            $('.candidates').append('<td>'+ result.data[i].nom_candidat + '</td');
            $('.candidates').append('<td>'+ result.data[i].prenom_candidat + '</td');
            $('.candidates').append('<td>'+ result.data[i].description_candidat + '</td');
            $('.candidates').append('</tr>');
        }
    });
});