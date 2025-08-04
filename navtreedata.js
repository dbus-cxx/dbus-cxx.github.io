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
        [ "Features", "index.html#autotoc_md1", [
          [ "Easy method calling and automatic XML generation for your API", "index.html#autotoc_md2", null ]
        ] ],
        [ "Known Limitations", "index.html#autotoc_md3", null ],
        [ "Download dbus-cxx source code", "index.html#autotoc_md5", [
          [ "Git Repository", "index.html#autotoc_md6", null ]
        ] ],
        [ "Documentation, Tutorials, Guides, Quick Start, et. al.", "index.html#autotoc_md9", [
          [ "Getting help", "index.html#autotoc_md10", null ]
        ] ]
      ] ],
      [ "License", "index.html#autotoc_md11", null ]
    ] ],
    [ "Quick-start", "quick-start.html", [
      [ "Using dbus-cxx with your build system", "quick-start.html#autotoc_md12", [
        [ "pkg-config files", "quick-start.html#autotoc_md13", null ],
        [ "CMake + dbus-cxx", "quick-start.html#autotoc_md14", null ],
        [ "qmake + dbus-cxx", "quick-start.html#autotoc_md15", null ],
        [ "Autotools + dbus-cxx", "quick-start.html#autotoc_md16", null ]
      ] ],
      [ "Initial Concepts", "quick-start.html#quick_start_initial_concepts", [
        [ "sigc++ signal and slot library", "quick-start.html#autotoc_md17", [
          [ "Free Functions", "quick-start.html#autotoc_md18", null ],
          [ "Member Functions", "quick-start.html#autotoc_md19", null ]
        ] ],
        [ "Smart pointers and create()", "quick-start.html#autotoc_md20", null ]
      ] ],
      [ "Quick-start example", "quick-start.html#autotoc_md21", [
        [ "Server code", "quick-start.html#autotoc_md22", [
          [ "Summary", "quick-start.html#autotoc_md23", null ],
          [ "Simple server 0 code discussion", "quick-start.html#autotoc_md24", null ],
          [ "Create a dispatcher to manage threads, timeouts and I/O watches", "quick-start.html#autotoc_md25", null ],
          [ "Create a connection to the D-Bus session bus", "quick-start.html#autotoc_md26", null ],
          [ "Request a name for our application on the bus", "quick-start.html#autotoc_md27", null ],
          [ "Create an object on the bus", "quick-start.html#autotoc_md28", null ],
          [ "Add a method named add to our object", "quick-start.html#autotoc_md29", null ],
          [ "Wait for incoming calls", "quick-start.html#autotoc_md30", null ]
        ] ],
        [ "Client code", "quick-start.html#autotoc_md31", [
          [ "Include headers", "quick-start.html#autotoc_md32", null ],
          [ "Initializing the Dispatcher and Connection", "quick-start.html#autotoc_md33", null ],
          [ "Creating a Proxy object", "quick-start.html#autotoc_md34", null ],
          [ "Call our proxy method", "quick-start.html#autotoc_md35", null ],
          [ "Print out the results", "quick-start.html#autotoc_md36", null ]
        ] ]
      ] ]
    ] ],
    [ "Building dbus-cxx from source", "building-from-source.html", [
      [ "1. What are the requirements to build from source?", "building-from-source.html#autotoc_md38", null ],
      [ "2. What are the requirements to build the tools?", "building-from-source.html#autotoc_md39", null ],
      [ "3. Smart Pointer information", "building-from-source.html#autotoc_md40", null ],
      [ "4. Documentation Generation", "building-from-source.html#autotoc_md41", null ],
      [ "6. Tools", "building-from-source.html#autotoc_md42", null ],
      [ "7. Building a .deb package", "building-from-source.html#autotoc_md43", null ]
    ] ],
    [ "Local and Remote Concepts", "local-and-remote.html", [
      [ "Bus Names, Paths, and Interfaces", "local-and-remote.html#autotoc_md44", [
        [ "Bus Names", "local-and-remote.html#autotoc_md45", null ],
        [ "Paths", "local-and-remote.html#autotoc_md46", null ],
        [ "Interfaces", "local-and-remote.html#autotoc_md47", null ]
      ] ],
      [ "Local Objects", "local-and-remote.html#autotoc_md48", null ],
      [ "Remote Objects", "local-and-remote.html#autotoc_md49", null ]
    ] ],
    [ "Dispatching in dbus-cxx", "dispatching.html", [
      [ "Standalone Dispatcher", "dispatching.html#autotoc_md50", null ],
      [ "Dispatching with Qt", "dispatching.html#autotoc_md51", null ],
      [ "Dispatching with GLib", "dispatching.html#autotoc_md52", null ]
    ] ],
    [ "Multiple Return Values", "multiple-return.html", [
      [ "Multiple Return Values", "multiple-return.html#autotoc_md53", null ]
    ] ],
    [ "ObjectManager support", "object-manager.html", null ],
    [ "Custom types", "custom-types.html", null ],
    [ "DBus Types", "dbus-types.html", null ],
    [ "Runtime configuration of dbus-cxx", "runtime-configuration.html", [
      [ "Default message endianess", "runtime-configuration.html#autotoc_md54", null ],
      [ "Logging", "runtime-configuration.html#autotoc_md55", null ]
    ] ],
    [ "Variants", "variants.html", null ],
    [ "Windows Support", "windows-support.html", null ],
    [ "dbus-cxx 2.0 Migration Guide", "dbus-cxx-2-0-migration.html", [
      [ "Migration", "dbus-cxx-2-0-migration.html#autotoc_md56", [
        [ "Migration Example", "dbus-cxx-2-0-migration.html#autotoc_md57", null ],
        [ "Type Changes", "dbus-cxx-2-0-migration.html#autotoc_md58", null ],
        [ "Backend Changes", "dbus-cxx-2-0-migration.html#autotoc_md59", null ],
        [ "API Changes", "dbus-cxx-2-0-migration.html#autotoc_md60", null ],
        [ "API and ABI Compatibility", "dbus-cxx-2-0-migration.html#autotoc_md61", null ]
      ] ],
      [ "Major changes for dbus-cxx version 2.0", "dbus-cxx-2-0-migration.html#autotoc_md62", null ],
      [ "Features Removed", "dbus-cxx-2-0-migration.html#autotoc_md63", null ]
    ] ],
    [ "dbus-cxx-xml2cpp", "xml2cpp.html", [
      [ "Summary", "xml2cpp.html#autotoc_md64", null ],
      [ "Commands", "xml2cpp.html#autotoc_md65", null ],
      [ "Extended DBus XML attributes", "xml2cpp.html#autotoc_md66", null ],
      [ "Proxy Example", "xml2cpp.html#autotoc_md67", null ],
      [ "Adapter Example", "xml2cpp.html#autotoc_md68", null ]
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
"classDBus_1_1DBusDaemonProxy.html#a8fea4166b2864cffe214c719070c266b",
"classDBus_1_1ErrorMessageNestedTooDeep.html",
"classDBus_1_1InterfaceProxy.html#a5a6be85706d6185528e8f4738baff026",
"classDBus_1_1MessageIterator.html#a5ab44364049909ba55b47c2aed275595",
"classDBus_1_1Object.html#ae79c2496649fd3ae54b9420d72e1a095",
"classDBus_1_1Qt_1_1QtDispatcher.html#a88205ecfdab527498ac48d093ca900f4",
"classDBus_1_1ThreadDispatcher.html#a34885529fb85440c36f3e200b429b1d2",
"classDBus_1_1priv_1_1SendmsgTransport.html#aeefed06d68d930ded49027aaa8ef33a8",
"connection_8h.html",
"functions_func_r.html",
"namespaceDBus.html#ad1f4b2409e998e4656727b9c2bf94334a4e866b275c85fbb439f6484251cfb31c",
"standalonedispatcher_8h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';