<?php
          $conn = mysqli_connect("localhost","root","","testing");
$message = '';

  if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $dob = $_POST['dob'];
        $living_place = $_POST['living_place'];
        $gender = $_POST['gender'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $living_city = $_POST['living_city'];
        $district = $_POST['district'];
        $pincode = $_POST['pincode'];
        $state = $_POST['state'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $graduate = $_POST['graduate'];
        $sponsorship = $_POST['sponsorship'];
        $f_name = $_POST['f_name'];
        $m_name = $_POST['m_name'];
        $f_occupation = $_POST['f_occupation'];
        $f_yearly_income = $_POST['f_yearly_income'];
        $f_phone = $_POST['f_phone'];
        $m_occupation = $_POST['m_occupation'];
        $m_yearly_income = $_POST['m_yearly_income'];
        $m_phone = $_POST['m_phone'];
        
        
        // $sql="INSERT INTO scholarship(name,dob,living_place,gender,address,city,living_city,district,pincode,state,phone,email,graduate,sponsorship) VALUES('$name','$dob','$living_place','$gender','$address','$city','$living_city','$district','$pincode','$state','$phone','$email','$graduate','$sponsorship')";

        // $query = mysqli_query($conn,$sql);


        if('$name'!=''&&'$dob'!=''&&'$living_place'!=''&&'$gender'!=''&&'$city'!=''&&'$address'!=''&&'$living_city'!=''&&'$district'!=''&&'$pincode'!=''&&'$state'!=''&&'$phone'!=''&&'$email'!=''&&'$graduate'!=''&&'$sponsorship'!=''&&'$f_phone'!=''&&'$f_occupation'!=''&&'$f_name'!=''&&'$f_yearly_income'!=''&&'$m_name'!=''&&'$m_yearly_income'!=''&&'$m_occupation'!=''&&'$m_phone'!=''){
          $sql=mysqli_query($conn,"INSERT INTO scholarship(name,dob,living_place,gender,address,city,living_city,district,pincode,state,phone,email,graduate,sponsorship,f_name,f_occupation,f_yearly_income,f_phone,m_name,m_occupation,m_yearly_income,m_phone) VALUES('$name','$dob','$living_place','$gender','$address','$city','$living_city','$district','$pincode','$state','$phone','$email','$graduate','$sponsorship','$f_name','$f_occupation','$f_yearly_income','$f_phone','$m_name','$m_occupation','$m_yearly_income','$m_phone')");
        }
        if($sql){
                $message = '
  <div class="alert alert-success">
  Registration Completed Successfully
  </div>
  ';
                // echo'<script>alert("Registration finished Successfully")</script>';    
                // sleep(5);
                // header('location:#');
        }
        else{
          // echo'<script>alert("Failed in registration")</script>';        
          $message = '
  <div class="alert alert-success">
  There is an error in Registration
  </div>
  ';

        }
  }

?>



<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>2020 Student Sponsorship Form</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
  <style>
  .box
  {
   width:800px;
   margin:0 auto;
  }
  .active_tab1
  {
   background-color:#fff;
   color:#333;
   font-weight: 600;
  }
  .inactive_tab1
  {
   background-color: #f5f5f5;
   color: #333;
   cursor: not-allowed;
  }
  .has-error
  {
   border-color:#cc0000;
   background-color:#ffff99;
  }
  </style>
 </head>
 <body>
 <br />
  <div class="container">
   <br />
   <div align="center">
    <img src="hopelogo.webp"><br>
    <h2 align="center"><span style="color:red">Student</span><span style="color: lightgreen"> Sponsorship</span><span style="color: blue"> Form</span></h2><br />
       <?php 
       echo $message; ?>

   </div>
   <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
   <form method="post" id="register_form" action="test.php">
    <ul class="nav nav-tabs">
     <li class="nav-item">
      <a class="nav-link active_tab1" style="border:1px solid #ccc" id="student_login_details">Student Details</a>
     </li>
     <li class="nav-item">
      <a class="nav-link inactive_tab1" id="parent_login_details" style="border:1px solid #ccc">Parent's Details</a>
     </li>
     <li class="nav-item">
      <a class="nav-link inactive_tab1" id="education_10_details" style="border:1px solid #ccc">10th Education Details</a>
     </li>
    </ul>
    <div class="tab-content" style="margin-top:16px;">
     <div class="tab-pane active" id="student_details">
      <div class="panel panel-default">
       <div class="panel-heading">Student Details</div>
       <div class="panel-body">
        
        <div>
         <label>Full Name</label>
         <input type="text" name="name" id="name" class="form-control" />
         <span id="error_name" class="text-danger"></span>
        </div><br>
         
        <div>
         <label>Date-of-Birth</label>
         <input type="date" name="dob" id="dob" class="form-control" />
         <span id="error_dob" class="text-danger"></span>
        </div><br>

         <label>Living place</label><br>
         <div style="margin-left:20px">
          <input type="radio" id="home" name="living_place" value="Home" checked>
         <label style="font-weight: normal">Home</label><br>
          <input type="radio" id="srilankan_refugee_camp" name="living_place" value="Srilankan Refugee Camp">
         <label style="font-weight: normal">Srilankan Refugee Camp</label><br>
         <input type="radio" id="orphanage" name="living_place" value="Orphanage" >
         <label style="font-weight: normal">Orphanage</label><br>
         <input type="radio" id="relative's_house" name="living_place" value="Relative's house">
         <label style="font-weight: normal">Relative's house</label><br>  
        </div><br>

         <label>Gender</label><br>
          <div style="margin-left: 20px">
          <input type="radio" id="male" name="gender" value="Male" checked>
          <label style="font-weight: normal">Male</label><br>
          <input type="radio" id="female" name="gender" value="female">
          <label style="font-weight: normal">Female</label>
        </div><br>

        <div>
          <label>Address</label>
         <textarea id="address" name="address" class="form-control"></textarea>
         <span id="error_address" class="text-danger"></span>
        </div><br>

        <div>
         <label>City / Town / Village</label>
         <input type="text" name="city" id="city" class="form-control" />
         <span id="error_city" class="text-danger"></span>
        </div><br>

        <label>Living place</label><br>
          <div style="margin-left: 20px">
          <input type="radio" id="village" name="living_city" value="Village" checked>
          <label style="font-weight: normal">Village</label><br>
          <input type="radio" id="town" name="living_city" value="Town">
          <label style="font-weight: normal">Town</label><br>
          <input type="radio" id="city" name="living_city" value="City">
          <label style="font-weight: normal">City</label>
        </div><br>

        <div>
         <label for="district">District</label>
         <select id="district" name="district" class="form-control">
         <option>Option</option>
         <option>Ariyalur</option>
         <option>Chengalpet</option>
         <option>Chennai</option>
         <option>Coimbatore</option>
         <option>Cuddalore</option>
         <option>Dharmapuri</option>
         <option>Dindigul</option>
         <option>Erode</option>
         <option>Kallakurichi</option>
         <option>Kancheepuram</option>
         <option>Karur</option>
         <option>Krishnagiri</option>
         <option>Madurai</option>
         <option>Nagapattinam</option>
         <option>Kanyakumari</option>
         <option>Namakkal</option>
         <option>Perambalur</option>
         <option>Pudukottai</option>
         <option>Ramanathapuram</option>
         <option>Ranipet</option>
         <option>Salem</option>
         <option>Sivagangai</option>
         <option>Tenkasi</option>
         <option>Thanjavur</option>
         <option>Theni</option>
         <option>Thiruvallur</option>
         <option>Thiruvarur</option>
         <option>Tuticorin</option>
         <option>Trichirappalli</option>
         <option>Thirunelveli</option>
         <option>Tirupattur</option>
         <option>Tiruppur</option>
         <option>Thiruvannamalai</option>
         <option>The Nilgiris</option>
         <option>Vellore</option>
         <option>Viluppuram</option>
         <option>Virudhunagar</option>
       </select>
         <span id="error_district" class="text-danger"></span>
        </div><br>

        <div>
         <label>Pincode</label>
         <input type="text" name="pincode" id="pincode" class="form-control" />
         <span id="error_pincode" class="text-danger"></span>
        </div><br>

        <div>
         <label>State</label>
         <input type="text" name="state" id="state" class="form-control" />
         <span id="error_state" class="text-danger"></span>
        </div><br>

        <div>
         <label>Cell phone</label>
         <input type="text" name="phone" id="phone" class="form-control" />
         <span id="error_phone" class="text-danger"></span>
        </div><br>

        <div>
         <label>Email</label>
         <input type="text" name="email" id="email" class="form-control" />
         <span id="error_email" class="text-danger"></span>
        </div><br>

        <label>Will you be the first graduate in the family ?</label><br>
          <div style="margin-left: 20px">
          <input type="radio" id="yes" name="graduate" value="Yes" checked>
          <label style="font-weight: normal">Yes</label><br>
          <input type="radio" id="no" name="graduate" value="No">
          <label style="font-weight: normal">No</label>
        </div><br>

        <div>
         <label for="sponsorship">Sponsorship applied for</label>
         <select id="sponsorship" name="sponsorship" class="form-control">
         <option>Option</option>
         <option>Medicine</option>
         <option>Engineering</option>
         <option>Agriculture</option>
         <option>Paramedical( Dialysis, Physiotherapy, Radiology, etc)</option>
         <option>Nursing</option>
         <option>Commerce</option>
         <option>Arts</option>
         <option>Science</option>
         <option>Other</option>
       </select>
                <span id="error_sponsorship" class="text-danger"></span>
        </div><br>

        <div align="center">
         <button type="button" name="stu_next" id="stu_next" class="btn btn-info btn-lg">Next</button>
<!--       <input type="submit" name="submit" id="submit">
 -->         </div>
        <br />
       </div>
      </div>
     </div>
     <div class="tab-pane fade" id="parent_details">
      <div class="panel panel-default">
       <div class="panel-heading">Parent's Information</div>
       <div class="panel-body">
         
        <div>
         <label>Father's Name</label>
         <input type="text" name="f_name" id="f_name" class="form-control" />
         <span id="error_f_name" class="text-danger"></span>
        </div><br>

        <div>
         <label>Father's Occupation</label>
         <input type="text" name="f_occupation" id="f_occupation" class="form-control" />
         <span id="error_f_occupation" class="text-danger"></span>
        </div><br>

        <div>
         <label>Father's Yearly Income</label>
         <input type="text" name="f_yearly_income" id="f_yearly_income" class="form-control" />
         <span id="error_f_yearly_income" class="text-danger"></span>
        </div><br>

        <div>
         <label>Father's Cellphone</label>
         <input type="text" name="f_phone" id="f_phone" class="form-control" />
         <span id="error_f_phone" class="text-danger"></span>
        </div><br>

        <div>
         <label>Mother's Name</label>
         <input type="text" name="m_name" id="m_name" class="form-control" />
         <span id="error_m_name" class="text-danger"></span>
        </div><br>

        <div>
         <label>Mother's Occupation</label>
         <input type="text" name="m_occupation" id="m_occupation" class="form-control" />
         <span id="error_m_occupation" class="text-danger"></span>
        </div><br>

        <div>
         <label>Mother's Yearly Income</label>
         <input type="text" name="m_yearly_income" id="m_yearly_income" class="form-control" />
         <span id="error_m_yearly_income" class="text-danger"></span>
        </div><br>

        <div>
         <label>Mother's Cellphone</label>
         <input type="text" name="m_phone" id="m_phone" class="form-control" />
         <span id="error_m_phone" class="text-danger"></span>
        </div><br>


        <div align="center">
         <button type="button" name="par_previous" id="par_previous" class="btn btn-default btn-lg">Previous</button>
         <button type="button" name="par_next" id="par_next" class="btn btn-info btn-lg">Next</button>
<!--          <input type="submit" name="submit" id="submit">
 -->        </div>
        <br />
       </div>
      </div>
     </div>
     <div class="tab-pane fade" id="education10_details">
      <div class="panel panel-default">
       <div class="panel-heading">10th Education Details</div>
       <div class="panel-body">
        
        <div>
         <label>School Name where you studied 10th standard</label>
         <input type="text" name="scl10" id="scl10" class="form-control" />
         <span id="error_scl10" class="text-danger"></span>
        </div><br>

        <div>
         <label>city/village/town name where you studied 10th standard</label>
         <input type="text" name="scl10city" id="scl10city" class="form-control" />
         <span id="error_scl10city" class="text-danger"></span>
        </div><br>

        <label>10th standard school type</label><br>
          <div style="margin-left: 20px">
          <input type="radio" id="govt_scl" name="scl_type_10" value="Government School" checked>
          <label style="font-weight: normal">Government School</label><br>
          <input type="radio" id="govt_aided_scl" name="scl_type_10" value="Government Aided School">
          <label style="font-weight: normal">Government Aided School</label><br>
          <input type="radio" id="private_scl" name="scl_type_10" value="Private School">
          <label style="font-weight: normal">Private School</label>
        </div><br>

        <div>
         <label for="year_10">Year passed 10th Standard</label>
         <select id="year_10" name="year_10" class="form-control">
         <option>Option</option>
         <option>2018</option>
         <option>2017</option>
         <option>2016</option>
         <option>2015</option>
         <option>2014</option>
       </select>
                <span id="error_year_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th standard subject 1: language marks</label>
         <input type="text" name="mark_lang_10" id="mark_lang_10" class="form-control" />
         <span id="error_mark_lang_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th standard subject 2: English language marks</label>
         <input type="text" name="mark_englang_10" id="mark_englang_10" class="form-control" />
         <span id="error_mark_englang_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th standard subject 3: Mathematics marks</label>
         <input type="text" name="mark_maths_10" id="mark_maths_10" class="form-control" />
         <span id="error_mark_maths_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th standard subject 4: Science mark</label>
         <input type="text" name="mark_science_10" id="mark_science_10" class="form-control" />
         <span id="error_mark_science_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th standard subject 5: Social Science marks</label>
         <input type="text" name="mark_socscience_10" id="mark_socscience_10" class="form-control" />
         <span id="error_mark_socscience_10" class="text-danger"></span>
        </div><br>

        <div>
         <label>10th Total Marks</label>
         <input type="text" name="mark_tot_10" id="mark_tot_10" class="form-control" />
         <span id="error_mark_tot_10" class="text-danger"></span>
        </div><br>
        
        <div align="center">
         <button type="button" name="education10_details_previous" id="education10_details_previous" class="btn btn-default btn-lg">Previous</button>
         <button type="button" name="education10_details_next" id="education10_details_next" class="btn btn-success btn-lg">Register</button>
        
        <br />
       </div>
      </div>
     </div>
    </div>
   </form>
 </div>
 <div class="col-sm-2"></div>
  </div>
 </body>
</html>

<script>
$(document).ready(function(){
 
 $('#stu_next').click(function(){
  
  var error_name='';
  var error_address='';
  var error_sponsorship=''; 
  var error_phone='';
  var error_state='';
  var error_pincode='';
  var error_district='';
  var error_city='';
  var error_dob='';
  var error_email = '';

  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var mobile_validation = /^\d{10}$/;

  console.log($.trim($('#name').val()).length);
  console.log($.trim($('#dob').val()).length);


  if($.trim($('#name').val()).length == 0)
  {
   error_name = 'Name is required';
   $('#error_name').text(error_name);
   $('#name').addClass('has-error');
  }
  else
  {
   error_name = '';
   $('#error_name').text(error_name);
   $('#name').removeClass('has-error');
  }

  if($.trim($('#dob').val()).length == 0)
  {
   error_dob = 'Date-of-Birth is required';
   $('#error_dob').text(error_dob);
   $('#dob').addClass('has-error');
  }
  else
  {
   error_dob = '';
   $('#error_dob').text(error_dob);
   $('#dob').removeClass('has-error');
  }

  if($.trim($('#address').val()).length == 0)
  {
   error_address = 'Address is required';
   $('#error_address').text(error_address);
   $('#address').addClass('has-error');
  }
  else
  {
   error_address = '';
   $('#error_address').text(error_address);
   $('#address').removeClass('has-error');
  }

  if($.trim($('#sponsorship').val()) == 'Option')
  {
   error_sponsorship = 'What for Sponsorship is required';
   $('#error_sponsorship').text(error_sponsorship);
   $('#sponsorship').addClass('has-error');
  }
  else
  {
   error_sponsorship = '';
   $('#error_sponsorship').text(error_sponsorship);
   $('#sponsorship').removeClass('has-error');
  }

  if($.trim($('#state').val()).length == 0)
  {
   error_state = 'State is required';
   $('#error_state').text(error_state);
   $('#state').addClass('has-error');
  }
  else
  {
   error_state = '';
   $('#error_state').text(error_state);
   $('#state').removeClass('has-error');
  }

  if($.trim($('#pincode').val()).length == 0)
  {
   error_pincode = 'Pincode is required';
   $('#error_pincode').text(error_pincode);
   $('#pincode').addClass('has-error');
  }
  else
  {
   error_pincode = '';
   $('#error_pincode').text(error_pincode);
   $('#pincode').removeClass('has-error');
  }

  if($.trim($('#city').val()).length == 0)
  {
   error_city = 'City / Town / Village is required';
   $('#error_city').text(error_city);
   $('#city').addClass('has-error');
  }
  else
  {
   error_city = '';
   $('#error_city').text(error_city);
   $('#city').removeClass('has-error');
  }

  if($.trim($('#district').val()) == 'Option')
  {
   error_district = 'District is required';
   $('#error_district').text(error_district);
   $('#district').addClass('has-error');
  }
  else
  {
   error_district = '';
   $('#error_district').text(error_district);
   $('#district').removeClass('has-error');
  }

  if($.trim($('#email').val()).length == 0)
  {
   error_email = 'Email is required';
   $('#error_email').text(error_email);
   $('#email').addClass('has-error');
  }
  else
  {
   if (!filter.test($('#email').val()))
   {
    error_email = 'Invalid Email';
    $('#error_email').text(error_email);
    $('#email').addClass('has-error');
   }
   else
   {
    error_email = '';
    $('#error_email').text(error_email);
    $('#email').removeClass('has-error');
   }
  }
  
  if($.trim($('#phone').val()).length == 0)
  {
   error_phone = 'Mobile Number is required';
   $('#error_phone').text(error_phone);
   $('#phone').addClass('has-error');
  }
  else
  {
   if (!mobile_validation.test($('#phone').val()))
   {
    error_phone = 'Invalid Mobile Number';
    $('#error_phone').text(error_phone);
    $('#phone').addClass('has-error');
   }
   else
   {
    error_phone = '';
    $('#error_phone').text(error_phone);
    $('#phone').removeClass('has-error');
   }
  }

  if(error_email != '' || error_dob != '' || error_phone!='' || error_city!='' ||error_district!='' || error_address!='' || error_name!='' || error_pincode!='' || error_state!='' || error_sponsorship!='')
  {
   return false;
  }
  else
  {
   $('#student_login_details').removeClass('active active_tab1');
   $('#student_details').removeClass('active');
   $('#student_login_details').addClass('inactive_tab1');
   $('#parent_login_details').removeClass('inactive_tab1');
   $('#parent_login_details').addClass('active_tab1 active');
   $('#parent_details').addClass('active in');
  }
 });
 
 $('#par_previous').click(function(){
  $('#parent_login_details').removeClass('active active_tab1');
  $('#parent_details').removeClass('active in');
  $('#parent_login_details').addClass('inactive_tab1');
  $('#student_login_details').removeClass('inactive_tab1');
  $('#student_login_details').addClass('active_tab1 active');
  $('#student_details').addClass('active in');
 });
 
 $('#par_next').click(function(){
  var error_f_name ='';
  var error_f_occupation ='';
  var error_f_yearly_income ='';
  var error_f_phone ='';
  var error_m_name ='';
  var error_m_occupation ='';
  var error_m_yearly_income ='';
  var error_m_phone ='';
  
  var mobile_validation = /^\d{10}$/;


  if($.trim($('#f_name').val()).length == 0)
  {
   error_f_name = 'Father\'s name is required';
   $('#error_f_name').text(error_f_name);
   $('#f_name').addClass('has-error');
  }
  else
  {
   error_f_name = '';
   $('#error_f_name').text(error_f_name);
   $('#f_name').removeClass('has-error');
  }

  if($.trim($('#f_occupation').val()).length == 0)
  {
   error_f_occupation = 'Father\'s ocupation is required';
   $('#error_f_occupation').text(error_f_occupation);
   $('#f_occupation').addClass('has-error');
  }
  else
  {
   error_f_occupation = '';
   $('#error_f_occupation').text(error_f_occupation);
   $('#f_occupation').removeClass('has-error');
  }

  if($.trim($('#f_yearly_income').val()).length == 0)
  {
   error_f_yearly_income = 'Father\'s Yearly Income is required';
   $('#error_f_yearly_income').text(error_f_yearly_income);
   $('#f_yearly_income').addClass('has-error');
  }
  else
  {
   error_f_yearly_income = '';
   $('#error_f_yearly_income').text(error_f_yearly_income);
   $('#f_yearly_income').removeClass('has-error');
  }

  if($.trim($('#m_name').val()).length == 0)
  {
   error_m_name = 'Mother\'s name is required';
   $('#error_m_name').text(error_m_name);
   $('#m_name').addClass('has-error');
  }
  else
  {
   error_m_name = '';
   $('#error_m_name').text(error_m_name);
   $('#m_name').removeClass('has-error');
  }

  if($.trim($('#m_occupation').val()).length == 0)
  {
   error_m_occupation = 'Mother\'s ocupation is required';
   $('#error_m_occupation').text(error_m_occupation);
   $('#m_occupation').addClass('has-error');
  }
  else
  {
   error_m_occupation = '';
   $('#error_m_occupation').text(error_m_occupation);
   $('#m_occupation').removeClass('has-error');
  }

  if($.trim($('#m_yearly_income').val()).length == 0)
  {
   error_m_yearly_income = 'Mother\'s Yearly Income is required';
   $('#error_m_yearly_income').text(error_m_yearly_income);
   $('#m_yearly_income').addClass('has-error');
  }
  else
  {
   error_m_yearly_income = '';
   $('#error_m_yearly_income').text(error_m_yearly_income);
   $('#m_yearly_income').removeClass('has-error');
  }

  if($.trim($('#f_phone').val()).length == 0)
  {
   error_f_phone = 'Father\'s Mobile Number is required';
   $('#error_f_phone').text(error_f_phone);
   $('#f_phone').addClass('has-error');
  }
  else
  {
   if (!mobile_validation.test($('#f_phone').val()))
   {
    error_f_phone = 'Invalid Mobile Number';
    $('#error_f_phone').text(error_f_phone);
    $('#f_phone').addClass('has-error');
   }
   else
   {
    error_f_phone = '';
    $('#error_f_phone').text(error_f_phone);
    $('#f_phone').removeClass('has-error');
   }
  }
  
  if($.trim($('#m_phone').val()).length == 0)
  {
   error_m_phone = 'Mother\'s Mobile Number is required';
   $('#error_m_phone').text(error_m_phone);
   $('#m_phone').addClass('has-error');
  }
  else
  {
   if (!mobile_validation.test($('#m_phone').val()))
   {
    error_m_phone = 'Invalid Mobile Number';
    $('#error_m_phone').text(error_m_phone);
    $('#m_phone').addClass('has-error');
   }
   else
   {
    error_m_phone = '';
    $('#error_m_phone').text(error_m_phone);
    $('#m_phone').removeClass('has-error');
   }
  }

  if(error_f_phone!='' || error_f_occupation!='' || error_f_name!='' || error_f_yearly_income!='' ||error_m_phone!='' || error_m_occupation!='' || error_m_name!='' || error_m_yearly_income!='')
  {
   return false;
  }
  else
  {
   $('#parent_login_details').removeClass('active active_tab1');
   $('#parent_details').removeClass('active');
   $('#parent_login_details').addClass('inactive_tab1');
   $('#education_10_details').removeClass('inactive_tab1');
   $('#education_10_details').addClass('active_tab1 active');
   $('#education10_details').addClass('active in');
  }
 });
 
 $('#education10_details_previous').click(function(){
  $('#education_10_details').removeClass('active active_tab1');
  $('#education10_details').removeClass('active in');
  $('#education_10_details').addClass('inactive_tab1');
  $('#parent_login_details').removeClass('inactive_tab1');
  $('#parent_login_details').addClass('active_tab1 active');
  $('#parent_details').addClass('active in');
 });
 
 $('#education10_details_next').click(function(){
  var error_mark_tot_10='';
  var error_mark_socscience_10='';
  var error_mark_science_10='';
  var error_mark_maths_10='';
  var error_mark_englang_10='';
  var error_mark_lang_10='';
  var error_scl10='';
  var error_scl10city='';
  var error_year_10='';

  if($.trim($('#scl10').val()).length == 0)
  {
   error_scl10 = 'This field is required';
   $('#error_scl10').text(error_f_name);
   $('#scl10').addClass('has-error');
  }
  else
  {
   error_scl10 = '';
   $('#error_scl10').text(error_scl10);
   $('#scl10').removeClass('has-error');
  }

  if($.trim($('#scl10city').val()).length == 0)
  {
   error_scl10city = 'This field is required';
   $('#error_scl10city').text(error_scl10city);
   $('#scl10city').addClass('has-error');
  }
  else
  {
   error_scl10city = '';
   $('#error_scl10city').text(error_scl10city);
   $('#scl10city').removeClass('has-error');
  }

  if($.trim($('#mark_lang_10').val()).length == 0)
  {
   error_mark_lang_10 = 'This field is required';
   $('#error_mark_lang_10').text(error_mark_lang_10);
   $('#mark_lang_10').addClass('has-error');
  }
  else
  {
   error_mark_lang_10 = '';
   $('#error_mark_lang_10').text(error_mark_lang_10);
   $('#mark_lang_10').removeClass('has-error');
  }

  if($.trim($('#mark_englang_10').val()).length == 0)
  {
   error_mark_englang_10 = 'This field is required';
   $('#error_mark_englang_10').text(error_mark_englang_10);
   $('#mark_englang_10').addClass('has-error');
  }
  else
  {
   error_mark_englang_10 = '';
   $('#error_mark_englang_10').text(error_mark_englang_10);
   $('#mark_englang_10').removeClass('has-error');
  }

  if($.trim($('#mark_maths_10').val()).length == 0)
  {
   error_mark_maths_10 = 'This field is required';
   $('#error_mark_maths_10').text(error_mark_maths_10);
   $('#mark_maths_10').addClass('has-error');
  }
  else
  {
   error_mark_maths_10 = '';
   $('#error_mark_maths_10').text(error_mark_maths_10);
   $('#mark_maths_10').removeClass('has-error');
  }

  if($.trim($('#error_mark_science_10').val()).length == 0)
  {
   error_mark_science_10 = 'This field is required';
   $('#error_mark_science_10').text(error_mark_science_10);
   $('#mark_science_10').addClass('has-error');
  }
  else
  {
   error_mark_science_10 = '';
   $('#error_mark_science_10').text(error_mark_science_10);
   $('#mark_science_10').removeClass('has-error');
  }

  if($.trim($('#mark_socscience_10').val()).length == 0)
  {
   error_mark_socscience_10 = 'This field is required';
   $('#error_mark_socscience_10').text(error_mark_socscience_10);
   $('#mark_socscience_10').addClass('has-error');
  }
  else
  {
   error_mark_socscience_10 = '';
   $('#error_mark_socscience_10').text(error_mark_socscience_10);
   $('#mark_socscience_10').removeClass('has-error');
  }

  if($.trim($('#mark_tot_10').val()).length == 0)
  {
   error_mark_tot_10 = 'This field is required';
   $('#error_mark_tot_10').text(error_mark_tot_10);
   $('#mark_tot_10').addClass('has-error');
  }
  else
  {
   error_mark_tot_10 = '';
   $('#error_mark_tot_10').text(error_mark_tot_10);
   $('#mark_tot_10').removeClass('has-error');
  }

  if($.trim($('#year_10').val()) == 'Option')
  {
   error_year_10 = 'This field is required';
   $('#error_year_10').text(error_year_10);
   $('#year_10').addClass('has-error');
  }
  else
  {
   error_year_10 = '';
   $('#error_year_10').text(error_year_10);
   $('#year_10').removeClass('has-error');
  }
  
  if(error_mark_lang_10!=''||error_mark_englang_10!='' || error_mark_maths_10!=''||error_mark_science_10!=''||error_mark_socscience_10!=''||error_mark_tot_10!=''||error_year_10!=''||error_scl10city!=''||error_scl10!='')
  {
   return false;
  }
  else
  {
   $('#btn_contact_details').attr("disabled", "disabled");
   $(document).css('cursor', 'prgress');
   $("#register_form").submit();
  }
  
 });
 
});
</script>
