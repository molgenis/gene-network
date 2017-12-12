'use strict';

var GN = require('../../config/gn.js');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Landing = require('./Landing');
var How = require('./How');
var About = require('./About');
var API = require('./ReactComponents/API');
var Gene = require('./ReactComponents/Gene/Gene');
var Term = require('./ReactComponents/Term');
var Network = require('./ReactComponents/Network');
var Ontology = require('./ReactComponents/Ontology');
var DiagnosisMain = require('./ReactComponents/DiagnosisMain');
var Diagnosis = require('./ReactComponents/Diagnosis');

window.GN = GN;

var history = createBrowserHistory();
ReactDOM.render(<Router history={history}>
                    <Route>
                        <Route path='/' component = {Landing}>
                            <Route path='/how' component = {How} />
                            <Route path='/about' component = {About} />
                            <Route path='/api' component = {API} />
                            <Route path='/gene/:geneId' component = {Gene} />
                            <Route path='/term/:termId' component = {Term} />
                            <Route path='/network/:ids' component = {Network} />
                            <Route path='/ontology/:id' component = {Ontology} />
                            <Route path='/diagnosis' component = {DiagnosisMain} />
                            <Route path='/diagnosis/:id' component = {Diagnosis} />
                        </Route>
                    </Route>
                </Router>,
                document.getElementById('reactcontainer')
               );
