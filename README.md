<h1 id="top">Weather Page</h1>
<p>Element Requirements</p>
<ol>
  <li><a href="#heading">Heading: Anytime Weather</a></li>
  <li><a href="#input">Input options</a>:
    <ul>
      <li>Enter city name</li>
      <li>Choose temperature units:
        <ul>
          <li>Fahrenheit (F)</li>
          <li>Celsius</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#submit">Submit button (Enter)</a></li>
  <li><a href="#spinner">Loading Spinner</a>: <strong>I chose to display two spinners to preserve layout and user experience.</strong></li>
  <li><a href="#api">API call</a>: <strong>I chose weatherapi.com</strong></li>
  <li><a href="#current">Current Conditions section</a></li>
  <li><a href="#icon">Graphic representation of current conditions</a></li>
  <li><a href="#temp">Current Temperature in selected units</a> (see #2)
    <ol type="a">
      <li>Optional: <a href="#switch">Switch selected units</a></li>
    </ol>
  </li>
  <li><a href="#name">Name of input city</a> (see #2)</li>
  <li><a href="#favorite">Save as favorite checkbox</a></li>
  <li><a href="#forecast">Five-day forecast</a></li>
</ol>
<p>&nbsp;</p>
<h2 id="heading">Heading</h2>
<p>I opted for an h3 tag to display the "Anytime Weather" heading instead of the h1 tag to keep heading from being overwhelming.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="input">Input Options</h2>
<p>I set up a text input field for the city and a radio button input for the temperature units. All inputs used labels, names, and ids.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="submit">Submit Button</h2>
<p>I used a button tag of type submit and used 'Enter' as the button text.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="spinner">Input Options</h2>
<p>I created a loader class containing the spinner and set up the animation in CSS. In order to preserve layout while loading data and fading in to the fetched data, I created an additional class of 'one' for the first spinner in the current conditions section and 'two' for the second spinner in the 5-day forecast section.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="api">API Call</h2>
<p>I consulted the weatherapi.com docs and decided to use the following parameters for the API call:<br>
<ol><li><b>q={location}</b>: where {location} is the stored value of the input city name</li>
  <li><b>days=5</b>: to get the forecast data for the next five days</li>
  <li><b>aqi=no</b>: saves time by not downloading unused data.</li>
  <li><b>alerts=no</b>: saves time by not downloading unused data.</li></li></ol></p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="current">Current Conditions</h2>
<p>I opted for an h3 tag to display the section title and orient users in what to expect after inputting the city name.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="icon">Graphic representation of current conditions</h2>
<p>I had to dig into the current object of the fetched data, access the condition object, then the icon property where I found the file name for the icon image source.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="temp">Current Temperature in selected units</h2>
<p>I set up a conditional statement to decide which property of the current object I should read and display. If the user selected F when clicking on the submit (Enter) button, the temp_f (temperature in Fahrenheit degrees) property is displayed along with the letter F. If the user selected C when clicking on the submit (Enter) button, the temp_c (temperature in Celsius degrees) property is displayed along with the letter C.</p>
<h3 id="switch">Switch selected units</h3><p>Next to the temperature (with units) display, there is a button offering the user to display the temperature in the other units that were not selected. If the user clicks on this button, a second API call is made and the corresponding properties are displayed, including in the 5-day forecast section. For example, if the user chose "F", the temp_c property is read and displayed along with "C" and the option to switch to "F".</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="name">Name of input city</h2>
<p>The {location} variable, which is passed into the function from the input text field, is used here to display the same city that was input in #2.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="favorite">Save as favorite checkbox</h2>
<p>When the user checks this box, which is initially disabled (since it makes no sense to set a favorite city if none is no display), the innerText property of the text input field is read to transfer the city name to a session variable named "favorite." If the user reloads the page, an onload function checks if the favorite session varaible exists, and loads the data for that city (along with a star icon after the city name to identify it as the favorite city) before the user can input another city.</p>
<p><a href="#top">Back to top</a></p>
<p>&nbsp;</p>
<h2 id="forecast">Five-day forecast</h2>
<p>I had to access the forecast object, then an array of forecastdays objects that contain the maxtemp and mintemp I chose to display (both with _c and _f variations as with temp in the current object). WIthin the forecastdays objects, I had to access the condition object, where I accessed the icon property with the image source file name, as done previously with the current object.</p><p>Since there were five forecastdays objects to parse (in order to display the forecast for each the next five days), I opted to use the forEach method on the array of forecastdays objects to save time and shorten the code.</p>
<p>Following my wife's feedback, I decided to include the day of the week to make it more user-friendly. I had issues with the is_day property of the current object, so I decided to use javascript's date object and an array with days of the week to generate the three-letter abbreviation for each day. I also added a p tag on top of the day icon to display the day of the week.</p>
  
<p><a href="#top">Back to top</a></p>
