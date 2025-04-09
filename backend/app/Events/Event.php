<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;

abstract class Event
{
    use SerializesModels;
}

public function media()
{
    return $this->hasMany(MediaEvent::class, 'event_id');
}

