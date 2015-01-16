// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


document.addEventListener('DOMContentLoaded', function() {

  
  var goButton = document.getElementById("findIncident");
  var incidentNumber = document.getElementById("incidentId");
  incidentNumber.value = localStorage.getItem("IncidentNumber");
  goButton.addEventListener('click', function(){
    localStorage.setItem("IncidentNumber", incidentNumber.value)
    goButton.href = "https://support.wdf.sap.corp/sap/support/message/" + incidentNumber.value;
  });
});