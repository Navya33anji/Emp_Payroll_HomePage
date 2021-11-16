Window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml(); 
}); 
  // Template literal ES6 feature 
  const createInnerHtml = () => {
      const headerHtml = `
      <tr>
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th> 
      <th>Actions</th>
      </tr>
      <tr>
          <td><img class="Profile" scr="../Images/Profile2.jpg" alt=""></td>
          <td>Navytha</td>
          <td>Female</td>
          <td><div class='dept-label'>HR</div><div class='dept-label'>Finance</div></td>
          <td>3000000</td>
          <td><16 Nov 2021</td>
          <td>
          <img name="1" onclick="remove(this)" scr="../Images/Delete.png"> alt="Delete">
          <img name="1" onclick="update(this)" scr="../Images/Pen.png"> alt="Edit">
          </td>
          </tr>
          `;
          document.querySelector('#table-display').innerHTML = innerHtml;
        }
