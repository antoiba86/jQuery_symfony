<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Description of AppController
 *
 * @author Anto
 */
class AppController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('main/index.html.twig');
    }
    
    /**
     * @Route("/cheatsheet", name="cheatsheet")
     */
    public function cheatSheet(){
        return $this->render('main/cheatsheet.html.twig');
    }
    
    /**
     * @Route("/selectors", name="selectors")
     */
    public function selectors(){
        return $this->render('main/selectors.html.twig');
    }
    
    /**
     * @Route("/dom", name="dom")
     */
    public function dom(){
        return $this->render('main/dom.html.twig');
    }
    
    /**
     * @Route("/events", name="events")
     */
    public function events(){
        return $this->render('main/events.html.twig');
    }
    
    /**
     * @Route("/effects", name="effects")
     */
    public function effects(){
        return $this->render('main/effects.html.twig');
    }
    
    /**
     * @Route("/tutorials/introduction", name="intro")
     */
    public function introduction(){
        return $this->render('tutorial/introduction.html.twig');
    }
    
    
}
