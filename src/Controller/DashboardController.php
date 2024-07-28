<?php

namespace App\Controller;

use App\DataTable\PatientsDataTable;
use App\Form\Patient\PatientsSearchForm;
use App\TransferObject\DataTable\PatientsFilterTransfer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DashboardController extends AbstractController
{
    #[Route('', name: 'index')]
    public function index()
    {
        return $this->render('index.html.twig');
    }
}

