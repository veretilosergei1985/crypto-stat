<?php

namespace App\Dto\CryptoBubbles;

use App\Entity\LoginAttempt;
use Doctrine\Common\Collections\ArrayCollection;

class CryptoBubblesCoinCollection
{
    private ArrayCollection $coins;

    public function __construct()
    {
        $this->coins = new ArrayCollection();
    }

    public function addCoin(CryptoBubbleCoinDto $coinDto): self
    {
        if (!$this->coins->contains($coinDto)) {
            $this->coins[] = $coinDto;
        }

        return $this;
    }
}
