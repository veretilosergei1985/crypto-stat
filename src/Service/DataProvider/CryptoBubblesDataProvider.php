<?php

namespace App\Service\DataProvider;

use App\Dto\CryptoBubbles\CryptoBubbleCoinDto;
use App\Dto\CryptoBubbles\CryptoBubblesCoinCollection;
use GuzzleHttp\ClientInterface;
use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class CryptoBubblesDataProvider implements DataProvider
{
    public function __construct(private readonly ClientInterface $cryptoBubblesClient, private readonly SerializerInterface $serializer)
    {
    }

    public function getData(): mixed
    {
        $response = $this->cryptoBubblesClient->request('GET', '/backend/data/bubbles1000.usd.json');

//        $lastPosts = $this->serializer->deserialize(
//            $response->getBody()->getContents(),
//            CryptoBubblesCoinCollection::class,
//            'json'
//        );

        $serializer = new Serializer([
            new ObjectNormalizer(
                null,
                null,
                null,
                new PhpDocExtractor()
            ),
            new ArrayDenormalizer(),
        ], ['json' => new JsonEncoder()]);

        $data = $serializer->deserialize(
            $response->getBody()->getContents(),
            CryptoBubbleCoinDto::class . '[]',
            'json',
            [
                'allow_extra_attributes' => true
            ]
        );
        dd($data);
        dd(json_decode($response->getBody()->getContents(), true));
    }
}
