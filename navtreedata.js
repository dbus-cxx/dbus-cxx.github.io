/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "dbus-cxx", "index.html", [
    [ "dbus-cxx Library", "index.html", [
      [ "About", "index.html#autotoc_md0", [
        [ "Download dbus-cxx source code", "index.html#autotoc_md3", [
          [ "Git Repository", "index.html#autotoc_md4", null ]
        ] ],
        [ "Documentation, Tutorials, Guides, Quick Start, et. al.", "index.html#autotoc_md7", [
          [ "Getting help", "index.html#autotoc_md8", null ]
        ] ]
      ] ],
      [ "License", "index.html#autotoc_md9", null ]
    ] ],
    [ "Quick-start", "quick-start.html", [
      [ "Using dbus-cxx with your build system", "quick-start.html#autotoc_md10", [
        [ "pkg-config files", "quick-start.html#autotoc_md11", null ],
        [ "CMake + dbus-cxx", "quick-start.html#autotoc_md12", null ],
        [ "qmake + dbus-cxx", "quick-start.html#autotoc_md13", null ],
        [ "Autotools + dbus-cxx", "quick-start.html#autotoc_md14", null ]
      ] ],
      [ "Initial Concepts", "quick-start.html#quick_start_initial_concepts", [
        [ "sigc++ signal and slot library", "quick-start.html#autotoc_md15", [
          [ "Free Functions", "quick-start.html#autotoc_md16", null ],
          [ "Member Functions", "quick-start.html#autotoc_md17", null ]
        ] ],
        [ "Smart pointers and create()", "quick-start.html#autotoc_md18", null ]
      ] ],
      [ "Quick-start example", "quick-start.html#autotoc_md19", [
        [ "Server code", "quick-start.html#autotoc_md20", [
          [ "Summary", "quick-start.html#autotoc_md21", null ],
          [ "Simple server 0 code discussion", "quick-start.html#autotoc_md22", null ],
          [ "Create a dispatcher to manage threads, timeouts and I/O watches", "quick-start.html#autotoc_md23", null ],
          [ "Create a connection to the D-Bus session bus", "quick-start.html#autotoc_md24", null ],
          [ "Request a name for our application on the bus", "quick-start.html#autotoc_md25", null ],
          [ "Create an object on the bus", "quick-start.html#autotoc_md26", null ],
          [ "Add a method named add to our object", "quick-start.html#autotoc_md27", null ],
          [ "Wait for incoming calls", "quick-start.html#autotoc_md28", null ]
        ] ],
        [ "Client code", "quick-start.html#autotoc_md29", [
          [ "Include headers", "quick-start.html#autotoc_md30", null ],
          [ "Initializing the Dispatcher and Connection", "quick-start.html#autotoc_md31", null ],
          [ "Creating a Proxy object", "quick-start.html#autotoc_md32", null ],
          [ "Call our proxy method", "quick-start.html#autotoc_md33", null ],
          [ "Print out the results", "quick-start.html#autotoc_md34", null ]
        ] ]
      ] ]
    ] ],
    [ "Building dbus-cxx from source", "building-from-source.html", [
      [ "1. What are the requirements to build from source?", "building-from-source.html#autotoc_md36", null ],
      [ "2. What are the requirements to build the tools?", "building-from-source.html#autotoc_md37", null ],
      [ "3. Smart Pointer information", "building-from-source.html#autotoc_md38", null ],
      [ "4. Documentation Generation", "building-from-source.html#autotoc_md39", null ],
      [ "6. Tools", "building-from-source.html#autotoc_md40", null ],
      [ "7. Building a .deb package", "building-from-source.html#autotoc_md41", null ]
    ] ],
    [ "Local and Remote Concepts", "local-and-remote.html", [
      [ "Bus Names, Paths, and Interfaces", "local-and-remote.html#autotoc_md42", [
        [ "Bus Names", "local-and-remote.html#autotoc_md43", null ],
        [ "Paths", "local-and-remote.html#autotoc_md44", null ],
        [ "Interfaces", "local-and-remote.html#autotoc_md45", null ]
      ] ],
      [ "Local Objects", "local-and-remote.html#autotoc_md46", null ],
      [ "Remote Objects", "local-and-remote.html#autotoc_md47", null ]
    ] ],
    [ "Dispatching in dbus-cxx", "dispatching.html", [
      [ "Standalone Dispatcher", "dispatching.html#autotoc_md48", null ],
      [ "Dispatching with Qt", "dispatching.html#autotoc_md49", null ],
      [ "Dispatching with GLib", "dispatching.html#autotoc_md50", null ]
    ] ],
    [ "Multiple Return Values", "multiple-return.html", [
      [ "Multiple Return Values", "multiple-return.html#autotoc_md51", null ]
    ] ],
    [ "Custom types", "custom-types.html", null ],
    [ "DBus Types", "dbus-types.html", null ],
    [ "Runtime configuration of dbus-cxx", "runtime-configuration.html", [
      [ "Default message endianess", "runtime-configuration.html#autotoc_md52", null ],
      [ "Logging", "runtime-configuration.html#autotoc_md53", null ]
    ] ],
    [ "Variants", "variants.html", null ],
    [ "Windows Support", "windows-support.html", null ],
    [ "dbus-cxx 2.0 Migration Guide", "dbus-cxx-2-0-migration.html", [
      [ "Migration", "dbus-cxx-2-0-migration.html#autotoc_md54", [
        [ "Migration Example", "dbus-cxx-2-0-migration.html#autotoc_md55", null ],
        [ "Type Changes", "dbus-cxx-2-0-migration.html#autotoc_md56", null ],
        [ "Backend Changes", "dbus-cxx-2-0-migration.html#autotoc_md57", null ],
        [ "API Changes", "dbus-cxx-2-0-migration.html#autotoc_md58", null ],
        [ "API and ABI Compatibility", "dbus-cxx-2-0-migration.html#autotoc_md59", null ]
      ] ],
      [ "Major changes for dbus-cxx version 2.0", "dbus-cxx-2-0-migration.html#autotoc_md60", null ],
      [ "Features Removed", "dbus-cxx-2-0-migration.html#autotoc_md61", null ]
    ] ],
    [ "dbus-cxx-xml2cpp", "xml2cpp.html", [
      [ "Summary", "xml2cpp.html#autotoc_md62", null ],
      [ "Commands", "xml2cpp.html#autotoc_md63", null ],
      [ "Extended DBus XML attributes", "xml2cpp.html#autotoc_md64", null ],
      [ "Proxy Example", "xml2cpp.html#autotoc_md65", null ],
      [ "Adapter Example", "xml2cpp.html#autotoc_md66", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"DBusDaemonProxy_8cpp.html",
"classDBus_1_1Interface.html#a05c703a6a7d924cc276e790f39fe6ce9",
"classDBus_1_1MessageIterator.html#abc02a37bd3614a6a8c8bd4c80a4e23f8",
"classDBus_1_1SignalMatchRule.html#a0c95136fbd4ae0fc2eebd22a547a17e9",
"classDBus_1_1priv_1_1VariantAppendIterator.html",
"enums_8h.html",
"marshaling_8h_source.html",
"namespaceDBus.html#afc7b23dae1fe7797783d0f6ddc12af1d",
"types_8h.html#ac212a4c02e3a3e17b685689d45628dea"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';